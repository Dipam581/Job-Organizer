from io import BytesIO
import pdfminer
from pdfminer.high_level import extract_text

def parse_resume(pdf_file):
    try:
        # Extract text from the PDF file
        resume_text = extract_text(pdf_file)
        
        # Perform parsing of resume_text to extract relevant information
        # For example, you could use regular expressions or other methods to search for specific patterns
        
        # Dummy parsing, just returning the extracted text for demonstration
        return resume_text
    except Exception as e:
        print("Error parsing resume:", e)
        return None

if __name__ == "__main__":
    # Example usage: pass the resume file path as a command-line argument
    import sys
    if len(sys.argv) != 2:
        print("Usage: python resume_parser.py <resume_file>")
        sys.exit(1)
    
    resume_file_path = sys.argv[1]
    with open(resume_file_path, "rb") as resume_file:
        parsed_info = parse_resume(BytesIO(resume_file.read()))
        print(parsed_info)
