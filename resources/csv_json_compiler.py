import csv  
import json 
  
# Open the CSV 
f = open('Dept_products3.csv', 'r' ) 
# Change each fieldname to the appropriate field name. I know, so difficult.  
reader = csv.DictReader( f, fieldnames = ( "ID","Brand","CPUrating","RAM","GPUrating"))  
# Parse the CSV into JSON 
out = json.dumps( [ row for row in reader ] )  
print (out)
print ("JSON parsed!")  
# Save the JSON  
f = open('Dept_products3.json', 'w')  
f.write(out)  
print ("JSON saved!")