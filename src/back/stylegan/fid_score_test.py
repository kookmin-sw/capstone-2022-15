import sys
import matplotlib.pyplot as plt 
from tqdm import tqdm

lines = []
epoch = []
fid_score = []

for line in tqdm(open('fid_scores.txt')):
	lines.append(line)

# epoch, fid 나누기
for l in range(len(lines)):
	parts = lines[l].split(',')
	if l >= 28:
		epoch.append(int(parts[0]) + 16000)
	else:	
		epoch.append(int(parts[0]))

	fid_score.append(float(parts[1]))

# print("epoch : ", epoch)
# print("fid score : ", fid_score)


plt.plot(epoch, fid_score)
plt.xlabel("epoch")
plt.ylabel("fid_score")
plt.title("FID SCORE")
plt.show()
