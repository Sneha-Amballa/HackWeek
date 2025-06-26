from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import declarative_base, relationship, sessionmaker

Base = declarative_base()

class Category(Base):
    __tablename__ = 'categories'
    category_id = Column(Integer, primary_key=True)
    category_name = Column(String, nullable=False)

    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = 'products'
    product_id = Column(Integer, primary_key=True)
    product_name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    category_id = Column(Integer, ForeignKey('categories.category_id'))

    category = relationship("Category", back_populates="products")

engine = create_engine('sqlite:///database.db')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Step 6: Insert sample data
def populate_data():
    # Check if already populated
    if session.query(Category).first():
        return

    electronics = Category(category_name="Electronics")
    groceries = Category(category_name="Groceries")
    session.add_all([electronics, groceries])
    session.commit()

    products = [
        Product(product_name="Laptop", price=70000, category_id=electronics.category_id),
        Product(product_name="Smartphone", price=25000, category_id=electronics.category_id),
        Product(product_name="Rice", price=2000, category_id=groceries.category_id),
        Product(product_name="Wheat Flour", price=1500, category_id=groceries.category_id),
    ]

    session.add_all(products)
    session.commit()

def display_data():
    products = session.query(Product).all()
    for product in products:
        print(f"{product.product_name} - ₹{product.price} - Category: {product.category.category_name}")

populate_data()
display_data()