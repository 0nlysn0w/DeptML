import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB, BernoulliNB, MultinomialNB
import pickle

# Importing dataset
data = pd.read_csv("data/depthistory.csv")

# Convert categorical variable to numeric
#data["Typecleaned"]=np.where(data["Type"]=="Laptop",0,1)
# Cleaning dataset of NaN
data=data[[
    #-----
   # "PurchaseID"
   "EmployeeID",
    "LoanItemID"
]].dropna(axis=0, how='any')

# Split dataset in training and test datasets
X_train, X_test = train_test_split(data, test_size=0.5, random_state=int(time.time()))

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
    X_train[used_features].values,
    X_train["LoanItemID"]
)
y_pred = gnb.predict(X_test[used_features])

# Print results
print("Number of mislabeled points out of a total {} points : {}, performance {:05.2f}%"
      .format(
          X_test.shape[0],
          (X_test["LoanItemID"] != y_pred).sum(),
          100*(1-(X_test["LoanItemID"] != y_pred).sum()/X_test.shape[0])
))






# Importing dataset2
data2 = pd.read_csv("data/dataproduct.csv")
data2.rename(columns={'ID':'LoanItemID'}, inplace=True)

# Importing dataset3
# Convert categorical variable to numeric
#ata["Typecleaned"]=np.where(data["Type"]=="Laptop",0,1)

#importing dataset3
data3 = pd.read_csv("data/dataprofiel.csv")
data3.rename(columns={'Id':'LoanItemID'}, inplace=True)


testing = gnb.predict(data2[used_features])
file = open('test.pickle', 'wb')
pickle.dump(testing,file)
file.close()
file = open('test.pickle' ,'rb')
#openn = pickle.load(file)


print(testing)


