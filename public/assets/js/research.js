/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [{
    title: "Cutting-Edge Deep Learning Methods for Predicting and Detecting Cardiovascular Diseases",
    authors: "Sibi Sebastian, Indra Vijay Singh, Abdul Kareem",
    conferences: "First International Conference on Artificial Intelligence & Machine Learning and Data Science(ICAMDS - 2024)",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/research1.svg",
    citation: {
        vancouver: "Sibi Sebastian, Indra Vijay Singh, Abdul Kareem. Cutting-Edge Deep Learning Methods for Predicting and Detecting Cardiovascular Diseases. Recent Trends in Parallel Computing. 2024; 11(02):-",
    },
    abstract: "Cardiovascular diseases (CVDs) remain a major global health issue, highlighting the need for improved early detection and risk assessment methods. This research investigates the efficacy of both deep learning and traditional machine learning methods in forecasting cardiovascular diseases (CVDs).We evaluate a variety of models, including Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Multilayer Perceptrons (MLPs), Long Short-Term Memory (LSTM) networks, as well as Logistic Regression (LR), Decision Trees (DT), Random Forests (RF), Support Vector Machines (SVM), Gaussian Naive Bayes (NB), and K-Nearest Neighbors (KNN). Our analysis shows that the RNN model delivers the highest accuracy, achieving 99.51%, outperforming all other models. CNNs and Random Forests also show strong performance, while the LSTM model is less effective in comparison. These findings underscore the superior performance of deep learning techniques, especially RNNs, in improving CVD prediction accuracy. Integrating deep learning with traditional machine learning techniques enhances predictive accuracy, which is essential for advancing healthcare. By applying CNNs for extracting features from medical images and RNNs for analyzing patient data sequences, healthcare providers can achieve more accurate early detection and better management of CVDs. Furthermore, the effectiveness of Random Forests highlights the benefits of ensemble methods in handling complex medical data. This study contributes to the increasing body of evidence that supports the integration of advanced deep learning techniques with traditional machine learning algorithms for medical diagnostics. Such advancements have the potential to revolutionize cardiovascular care by enabling timely interventions and personalized treatment plans, thereby reducing the global burden of CVD-related deaths and illnesses. Keywords: Deep Learning, Cardiovascular, Machine Learning, Algorithms, Healthcare",
    absbox: "absPopup1",
}, ];
AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({
            image,
            title,
            authors,
            conferences,
            researchYr,
            citebox,
            citation,
            absbox,
            abstract,
        }) =>
        (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 

                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>

                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
    );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);