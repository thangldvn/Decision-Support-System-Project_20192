#%%
import pandas as pd
import numpy as np
from sklearn.decomposition import PCA as sklearnPCA
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.decomposition import IncrementalPCA
from sklearn import preprocessing

#from adjustText import adjust_text
#from vapeplot import vapeplot
%matplotlib inline

# %%
df = pd.read_csv('CompleteDataset.csv', index_col=0)
prem = ['Arsenal','Bournemouth', 'Brighton & Hove Albion', 'Burnley', 'Chelsea','Crystal Palace','Everton',
       'Huddersfield Town', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United',
       'Southampton','Stoke City', 'Swansea City', 'Tottenham Hotspur','Watford','West Bromwich Albion',
        'West Ham United']
wb = df.loc[(df['Preferred Positions'].str.contains('WB|RB|LB')==True)&(df.Club.isin(prem))
           & (df.Overall > 70)]

names = wb['Name'].tolist()
clubs = wb['Club'].tolist()
pp = wb['Preferred Positions'].tolist()
over = wb['Overall'].tolist()

wb = wb.groupby('Club').transform(lambda x: (x - x.mean()) / x.std())
wb2 = wb._get_numeric_data()
wb2 = wb2.fillna(wb2.mean())
x = wb2.values #returns a numpy array
min_max_scaler = preprocessing.StandardScaler()  # could also test using the StandardScaler()
x_scaled = min_max_scaler.fit_transform(x)
X_norm = pd.DataFrame(x_scaled)
pca = sklearnPCA(n_components=2) #2-dimensional PCA
wb_trans = pd.DataFrame(pca.fit_transform(x))
def cal_sse (cluster):
    SSE=0
    for i in cluster: 
        SSE += (i-np.mean(cluster))**2
    return SSE
# Number of clusters
kmeans = KMeans(n_clusters=6)
# Fitting the input data
kmeans = kmeans.fit(x)
# Getting the cluster labels
labels = kmeans.predict(x)
# Centroid values
C = kmeans.cluster_centers_
clusters = kmeans.labels_.tolist()
wb_trans['cluster'] = clusters
wb_trans['name'] = names

wb_trans['club'] = clubs
wb_trans['pp'] = pp
wb_trans['over'] = over
wb_trans.columns = ['x','y','cluster','name','club','pp','over']
wb_trans['comb'] = wb_trans['name'] + ', ' + wb_trans['club'] + ', '+ wb_trans['pp'] + ', ' +  wb_trans['over'].astype(str)
wb_trans.to_csv('final_Kmeans2.csv')


ax = sns.lmplot(x="x", y="y",hue='cluster', data=wb_trans, fit_reg=False, size =15, scatter_kws={"s": 100})

ax.set(xlim=(-10, 15))
ax.set(ylim=(-8, 12))


def label_point(x, y, val, ax):
    a = pd.concat({'x': x, 'y': y, 'val': val}, axis=1)
    for i, point in a.iterrows():
        ax.text(point['x']+.05, point['y'], str(point['val']))

label_point(wb_trans.x, wb_trans.y, wb_trans.name, plt.gca())

plt.show()


# %%
import pickle

# %%
# save the model to disk
filename = 'finalized_model.sav'
pickle.dump(model, open(filename, 'wb'))
#%%
# load the model from disk
loaded_model = pickle.load(open(filename, 'rb'))
result = loaded_model.score(X_test, Y_test)
print(result)