import cv2
import numpy as np

imagen = cv2.imread('angrypigeon.png')
hsv = cv2.cvtColor(imagen, cv2.COLOR_BGR2HSV)
colors, count = np.unique(hsv.reshape(-1, hsv.shape[-1]), axis=0, return_counts=True)
print(colors[np.argsort(-count)][:5])
