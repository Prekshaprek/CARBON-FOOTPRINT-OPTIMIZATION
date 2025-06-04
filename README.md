# 🌿 Supply Chain Carbon Footprint Optimizer 🚚

A web-based, machine learning-driven tool designed to **enhance supply chain logistics** by predicting **carbon emissions**. This project estimates **CO₂ equivalent per dollar spent** using emission factor data, empowering businesses to adopt **sustainable, eco-conscious logistics** practices.

---

## 📋 Overview

### C-Footprint-Optimizer
A smart, deep learning-powered solution for predicting carbon emissions in supply chains using emission factors and margin data.

Unlike traditional logistics systems that prioritize **cost** and **speed**, this tool focuses on environmental impact. It leverages **data-driven insights** to estimate emissions across supply chain segments, enabling users to make informed, green decisions by inputting key emission factor data.

---

## 🌟 Features

- ✅ Estimates carbon emissions per dollar using a trained ML model
- ✅ User-friendly interface built with **HTML + Flask**
- ✅ Reliable performance metrics: **MAE, RMSE, % error**
- ✅ Live-hosted on Netlify
- ✅ Promotes sustainable decision-making in logistics

---

## 🛠️ Tech Stack

| Component     | Technology                     |
|--------------|--------------------------------|
| **Backend**  | Python, Flask                  |
| **ML Model** | Scikit-learn, RandomForestRegressor |
| **Frontend** | HTML, CSS (minimal)            |
| **Deployment** | Netlify (frontend), Flask (local backend) |

---

## 📈 Machine Learning Approach

- **Model**: Random Forest Regressor
- **Inputs**:  
  - Emission Factors for Supply Chain (excluding margins)  
  - Emission Factor Margins  
- **Output**:  
  - Total Supply Chain Emission Factors (including margins)
- **Performance Metrics**:
  - MAE: ~0.04
  - RMSE: ~0.51
  - Avg % Error: ~1.23%

---
