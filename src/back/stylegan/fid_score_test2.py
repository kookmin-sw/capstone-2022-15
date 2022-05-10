import sys
import matplotlib.pyplot as plt 
import time
import threading
from tqdm import tqdm
from matplotlib.animation import FuncAnimation

def print_fid(epoch, fid):
	print("epoch: ",epoch)
	print("fid_score: ",fid)

	threading.Timer(5, print_fid).start()

lines = []
epoch = []
fid_score = []

for line in tqdm(open('fid_scores.txt')):
	lines.append(line)

# epoch, fid 나누기
for l in range(len(lines)):
	parts = lines[l].split(',')
	epoch.append((int(parts[0]) / 100))
	fid_score.append(float(parts[1]))

fig ,ax = plt.subplots(2,1, figsize=(10,10))


ax[0].plot(epoch, fid_score, 'r')
ax[0].set_xlabel("Epoch")
ax[0].set_ylabel("fid_score")
ax[0].set_title('FID graph')

'''
ax[1].plot(epoch[-10:], fid_score[-10:], 'b')
ax[1].set_xlabel("Epoch")
ax[1].set_ylabel("fid_score")
ax[1].set_title('FID graph - Recent 10 epoch')
'''
#plt.title("FID SCORE")
plt.show()


