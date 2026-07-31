---
title: Facial Emotion Recognition
summary: A deep learning computer vision system that classifies facial expressions into emotion categories from grayscale images, comparing custom CNNs against transfer learning.
problem: Can a model reliably classify emotional expression from low-resolution facial images?
methods:
  - Python
  - TensorFlow/Keras
  - OpenCV
  - Transfer Learning
  - Computer Vision
status: completed
order: 1
thumbnail: /images/work/fer-confusion-matrix.png
video: /videos/fer-slides.mp4
links:
  - label: View project notebook on GitHub
    href: https://github.com/SARAH-GAKII/facial-emotion-recognition/blob/main/Facial_Emotion_Detection_Notebook.ipynb
  - label: Download presentation slides (PDF)
    href: /documents/fer-presentation.pdf
---

## Overview

Facial expressions carry a large share of emotional communication, making facial emotion recognition (FER) an important part of affective computing and human-centered AI. This project builds and evaluates deep learning models that classify human facial expressions into distinct emotional categories from image data — comparing custom convolutional neural networks against transfer learning approaches.

## Dataset

Grayscale facial images at 48×48 resolution, split into training, validation, and test sets, across four emotion classes: happy, sad, surprise, and neutral. The low resolution and lack of color meant models had to learn from subtle structural facial patterns rather than strong texture cues.

## Approach

- Exploratory analysis and image preprocessing
- Data augmentation to improve robustness
- Custom CNN architectures for feature extraction
- Benchmarking against transfer learning models: VGG16, ResNet, and EfficientNet
- Multi-metric evaluation using accuracy, loss, precision, recall, and F1-score
- Class-level error analysis to understand confusion across emotions

## Results

| Model | Test Accuracy | Test Loss | Precision | Recall | F1-Score |
| --- | --- | --- | --- | --- | --- |
| CNN Model 1 | 71.9% | 0.665 | 0.73 | 0.72 | 0.72 |
| VGG16 | 72.7% | 0.728 | 0.75 | 0.73 | 0.73 |
| ResNet | 75.0% | 0.828 | 0.76 | 0.75 | 0.75 |
| EfficientNet | 75.8% | 0.808 | 0.78 | 0.76 | 0.76 |
| Complex CNN | 81.3% | 0.81 | 0.81 | 0.81 | 0.81 |
| **CNN Model 2** | **83.6%** | **0.454** | 0.84 | 0.84 | 0.84 |

The best-performing custom CNN reached roughly 84% test accuracy with the lowest test loss of any model evaluated.

![Confusion matrix for the final CNN model](/images/work/fer-confusion-matrix.png)

![Training and validation performance curves](/images/work/fer-training-performance.png)

## Key Insights

- **Custom CNNs outperformed transfer learning models.** Despite being deeper and pretrained on large-scale image datasets, the transfer learning backbones underperformed domain-specific CNN architectures on this grayscale facial data.
- **Subtle emotions were harder to classify.** Happy and surprise separated cleanly; neutral and sad showed more confusion.
- **Model complexity did not guarantee better performance.** Simpler architectures with better generalization outperformed deeper ones.
- **Generalization mattered more than raw accuracy.** Final model choice weighed loss and generalization behavior alongside accuracy.

## Tools

Python, TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib, Seaborn, CNNs, Transfer Learning, Computer Vision, Deep Learning
