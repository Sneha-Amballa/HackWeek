import fitz  
import sys

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text.lower()

def load_skills(filepath='skills.txt'):
    with open(filepath, 'r') as file:
        return [skill.strip().lower() for skill in file.readlines()]

def analyze_resume(text, skills):
    found = []
    missing = []
    for skill in skills:
        if skill.lower() in text:
            found.append(skill)
        else:
            missing.append(skill)
    return found, missing

def main():
    if len(sys.argv) < 2:
        print("Usage: python main.py <path_to_resume.pdf>")
        sys.exit(1)

    resume_path = sys.argv[1]
    print(f"\nAnalyzing resume: {resume_path}\n")

    resume_text = extract_text_from_pdf(resume_path)
    skills = load_skills()

    found, missing = analyze_resume(resume_text, skills)

    print("Skills Found:")
    for skill in found:
        print(f"  - {skill}")

    print("\n Skills Missing / Can Be Improved:")
    for skill in missing:
        print(f"  - {skill}")

    print("\n Summary:")
    print(f"Total Skills Found: {len(found)} / {len(skills)}")

if __name__ == "__main__":
    main()
