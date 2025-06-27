import markdown

# Input and output file paths
input_file = "sample.md"
output_file = "output.html"

# Read the Markdown file
with open(input_file, "r", encoding="utf-8") as md:
    md_content = md.read()

# Convert Markdown to HTML
html_content = markdown.markdown(md_content)

# Write the HTML to the output file
with open(output_file, "w", encoding="utf-8") as html:
    html.write(html_content)

print(f"Converted '{input_file}' to '{output_file}' successfully!")