const fs = require('fs').promises;
const path = require('path');

async function addPublishToFrontmatter(directory) {
    try {
        const files = await fs.readdir(directory, { withFileTypes: true });
        
        for (const file of files) {
            const fullPath = path.join(directory, file.name);
            
            if (file.isDirectory()) {
                await addPublishToFrontmatter(fullPath);
            } else if (file.name.endsWith('.md')) {
                let content = await fs.readFile(fullPath, 'utf8');
                
                // Check if file has frontmatter
                if (content.startsWith('---')) {
                    // Has frontmatter, add publish: true if not present
                    const parts = content.split('---');
                    if (!parts[1].includes('publish:')) {
                        parts[1] = parts[1].trim() + '\npublish: true\n';
                        content = parts.join('---');
                    }
                } else {
                    // No frontmatter, add it
                    content = '---\npublish: true\n---\n\n' + content;
                }
                
                await fs.writeFile(fullPath, content);
            }
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

// Run the script on the content directory
addPublishToFrontmatter('./content')
    .then(() => console.log('Done adding publish: true to all markdown files'))
    .catch(console.error); 