import os
import re
from datetime import datetime

def find_files(directory, extensions, date_cutoff, keywords):
    # Convert date string to datetime object
    date_cutoff = datetime.strptime(date_cutoff, '%d/%m/%Y')
    # Regular expression pattern to match the keywords
    pattern = re.compile('|'.join(keywords))
    
    # Create a directory to save the matched files
    output_dir = os.path.join(directory, 'matched_files')
    os.makedirs(output_dir, exist_ok=True)
    
    # List to store matched files
    matched_files = []
    
    # Walk through the directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Check if file has the desired extension and was modified after the cutoff date
            if file.endswith(extensions) and datetime.fromtimestamp(os.path.getmtime(os.path.join(root, file))) > date_cutoff:
                # Read the file contents
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Check if content contains any of the keywords
                    if pattern.search(content):
                        matched_files.append(os.path.join(root, file))
                        # Write the content to a new file in the output directory
                        with open(os.path.join(output_dir, file), 'w', encoding='utf-8') as output_file:
                            output_file.write(content)
    
    return matched_files

# Example usage
directory = r"C:\Users\jaini\AppData\Roaming\Code\User\History"
extensions = ('.js', 'mongodb.js')
date_cutoff = '20/03/2024'
keywords = ['use sis']

matched_files = find_files(directory, extensions, date_cutoff, keywords)
for file in matched_files:
    print(file)
