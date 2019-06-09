import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB, BernoulliNB, MultinomialNB
import pickle

# Importing dataset
training_Data = pd.read_csv("../resources/trainingdata2/History_Function1_Training.csv")

testing_Data = pd.read_csv("../resources/testdata2/History_Function1_Testing.csv")

# Convert categorical variable to numeric
#data["Typecleaned"]=np.where(data["Type"]=="Laptop",0,1)

# Cleaning training dataset of NaN
training_Data_Clean = training_Data[[
    #-----
    "PurchaseID",
    "EmployeeID",
    "LoanItemID"
]].dropna(axis=0, how='any')

# Cleaning testing dataset of NaN
testing_Data_Clean = testing_Data[[
    #-----
    "PurchaseID",
    "EmployeeID",
    "LoanItemID"
]].dropna(axis=0, how='any')

# Split dataset in training and test datasets
#X_train, X_test = train_test_split(data, test_size=0.5, random_state=int(time.time()))

# Instantiate the classifier
gnb = GaussianNB()
used_features =[
    #-----
    #"PurchaseID"
   # "EmployeeID",
    "LoanItemID",
    #"ID",
    #"Brand",
    #"CPUrating",
    #"RAM",
    #"GPUrating"	

]

# Train classifier
gnb.fit(
    training_Data_Clean[used_features].values,
    training_Data_Clean["LoanItemID"]
)

#prediction algorithm testing data
item_Predictions = gnb.predict(testing_Data[used_features])

# Print results
print("Number of mislabeled points out of a total {} points : {}, performance {:05.2f}%"
      .format(
          testing_Data_Clean.shape[0],
          (testing_Data_Clean["LoanItemID"] != item_Predictions).sum(),
          100*(1-(testing_Data_Clean["LoanItemID"] != item_Predictions).sum()/testing_Data_Clean.shape[0])
))






#- ??what are these datasets used for??

## Importing dataset2
#data2 = pd.read_csv("../resources/products.csv")
#data2.rename(columns={'ID':'LoanItemID'}, inplace=True)

## Importing dataset3
## Convert categorical variable to numeric
##ata["Typecleaned"]=np.where(data["Type"]=="Laptop",0,1)

##importing dataset3
#data3 = pd.read_csv("../resources/profiles.csv")
#data3.rename(columns={'Id':'LoanItemID'}, inplace=True)


testing = gnb.predict(testing_Data_Clean[used_features])

#??what test.pickle and wb and rb??
file = open('test.pickle', 'wb')
pickle.dump(testing,file)
file.close()
file = open('test.pickle' ,'rb')
#openn = pickle.load(file)

print(testing)


