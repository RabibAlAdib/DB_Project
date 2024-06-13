const cardData = [
    {   
        cardNumber: 'A',

        HeaderTittle:'Virus: Hepatitis B (HepB)',
        TSPTittle:'Hepatitis B: Transmission, Symptoms & Prevention',
        DoseTittle:'Standard Schedule for Hepatitis B (HepB)',
        PeriodTittle:'Vaccination Age periode',
        
        headerImage: '/img/VaccinePatient/HepatitisB.jpg',
        DescriptionPart: 'Hepatitis B is a viral infection caused by the Hepatitis B Virus (HBV) that primarily affects the liver. It can lead to both acute and chronic liver diseases, with potential outcomes including liver cirrhosis and hepatocellular carcinoma. It is a major global health issue due to its potential to cause lifelong infection and severe liver damage.',
        TSPPart: `
        <h3>Transmission:</h3>
            - Contact with infectious body fluids such as blood, semen, and vaginal fluids.</br>
            - From mother to child during childbirth.</br>
            - Sharing needles or syringes.</br>
            - Unprotected sexual contact.</br>
            </br>
        <h3>Symptoms:</h3>
            - Fatigue</br>
            - Jaundice (yellowing of skin and eyes)</br>
            - Abdominal pain</br>
            - Dark urine</br>
            - Loss of appetite</br>
            - Nausea and vomiting</br>
            - Joint pain</br>
            </br>
        <h3>Prevention:</h3>
            - Avoid sharing needles and personal items like razors or toothbrushes.</br>
            - Proper sterilization of medical equipment.</br>
            - Vaccination is the most effective prevention method.</br>
            
        `,
        DosePart:`
        <h3>Vaccine/Dose Schedule:</h3>
            - Usually given as a series of 3 or 4 shots over a 6-month period.`,
        AgePeriodePart: `
        <h3>Age Period:</h3>
            - First dose at birth, second dose at 1-2 months, and third dose at 6-18 months.
        `
    },
    {   
        cardNumber: 'B',

        HeaderTittle:'Virus: Diphtheria, Tetanus, Pertussis (DTaP/Tdap)',
        TSPTittle:'(DTaP/Tdap): Transmission, Symptoms & Prevention',
        DoseTittle:'Standard Schedule for (DTaP/Tdap)',
        PeriodTittle:'Vaccination Age periode',
        
        headerImage: '/img/VaccinePatient/TDAP.jpg',
        DescriptionPart: 'The DTaP/Tdap vaccine protects against three serious bacterial infections: diphtheria, tetanus, and pertussis (whooping cough). Diphtheria affects the mucous membranes of the throat and nose, tetanus causes painful muscle stiffness and spasms, and pertussis is a highly contagious respiratory disease known for severe coughing fits.',
        TSPPart: `
        <h3>Transmission: (Pertussis)</h3>
            - Respiratory droplets from coughing or sneezing.
        </br></br>
            
        <h3>Symptoms:</h3>
            - Diphtheria: Sore throat, fever, swollen glands, thick coating in the throat.</br>
            - Tetanus: Muscle stiffness, difficulty swallowing, muscle spasms.</br>
            - Pertussis (Whooping Cough): Severe coughing fits, "whooping" sound when inhaling, vomiting after coughing.</br>
            </br>
        <h3>Prevention:</h3>
            - Vaccination is the most effective prevention method.</br>
            - Good hygiene practices, such as hand washing. </br>`,

        DosePart:`
        <h3>Vaccine/Dose Schedule:</h3>
            - Vaccination is the most effective prevention method.</br>
            - Good hygiene practices, such as hand washing.`,
        AgePeriodePart: `
        <h3>Age Period:</h3>
          - DTaP: 2 months, 4 months, 6 months, 15-18 months, and 4-6 years.</br>
          - Tdap: 11-12 years, with boosters every 10 years. 
        `
    },
    {
      cardNumber: 'C',

      HeaderTittle:'Virus: Haemophilus influenzae type b (Hib)',
      TSPTittle:'Hib: Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for Haemophilus influenzae type b (Hib)',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/HIB.jpg',
      DescriptionPart: 'Haemophilus influenzae type b (Hib) is a bacterial infection that can lead to serious illnesses, especially in young children. It can cause severe respiratory infections, such as pneumonia, and invasive diseases like meningitis, which can result in brain damage or death.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Respiratory droplets from coughing or sneezing.
          </br></br>
      <h3>Symptoms:</h3>
      - Fever</br>
      - Headache</br>
      - Stiff neck</br>
      - Nausea and vomiting</br>
      - Light sensitivity  </br>    
        </br></br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Good hygiene practices, such as hand washing.      
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - Typically given as a series of 3 or 4 doses.
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - 2 months, 4 months, 6 months (if needed), and 12-15 months.
      `
    },
    {
      cardNumber: 'D',

      HeaderTittle:'Virus: Polio',
      TSPTittle:'Polio: Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for Polio',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/Polio.jpg',
      DescriptionPart: 'Polio, or poliomyelitis, is a highly infectious viral disease that primarily affects children under 5 years of age. The virus can invade the nervous system and cause irreversible paralysis within hours. Although many infections are asymptomatic, polio can lead to permanent disability and even death.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Fecal-oral route, through contaminated water or food.
          </br></br>
      <h3>Symptoms:</h3>
      - Fever</br>
      - Fatigue</br>
      - Headache</br>
      - Vomiting</br>
      - Stiffness in the neck</br>
      - Pain in the limbs</br>
      
        </br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Good sanitation and hygiene practices.
      
        </br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - Inactivated Polio Vaccine (IPV) is given in 4 doses.
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - 2 months, 4 months, 6-18 months, and 4-6 years.
      `
    },
    {
      cardNumber: 'E',

      HeaderTittle:'Virus: Pneumococcal Conjugate (PCV)',
      TSPTittle:'(PCV) : Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for (PCV)',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/PCV.jpg',
      DescriptionPart: 'The Pneumococcal Conjugate Vaccine (PCV) protects against pneumococcal disease caused by the bacterium Streptococcus pneumoniae. This bacterium can cause pneumonia, meningitis, and sepsis, which can be life-threatening, particularly in children and the elderly.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Respiratory droplets from coughing or sneezing.
          </br></br>
      <h3>Symptoms:</h3>
      - Fever</br>
      - Cough</br>
      - Shortness of breath</br>
      - Chest pain</br>
      - Stiff neck</br>
      - Sensitivity to light</br>
      
        </br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Good hygiene practices, such as hand washing.
      
        </br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - PCV13 (Prevnar 13) is given in 4 doses.
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - 2 months, 4 months, 6 months, and 12-15 months.
      `
    },
    
    {
      cardNumber: 'F',

      HeaderTittle:'Virus: Rotavirus (RV)',
      TSPTittle:'Rotavirus (RV): Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for Rotavirus (RV)',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/Rota.jpg',
      DescriptionPart: 'Rotavirus is a highly contagious virus that causes severe diarrhea, primarily in infants and young children. It is the leading cause of severe gastroenteritis in children worldwide and can lead to significant dehydration and hospitalization if not treated properly.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Fecal-oral route, through contaminated water or food.
          </br></br>
      <h3>Symptoms:</h3>
      - Severe diarrhea</br>
      - Vomiting</br>
      - Fever</br>
      - Abdominal pain
      
        </br></br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Good sanitation and hygiene practices.
      
        </br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - Rotarix: 2 doses.</br>
      - RotaTeq: 3 doses.
      
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - Rotarix: 2 months, 4 months.</br>
      - RotaTeq: 2 months, 4 months, 6 months.
      
      `
    },
    
    {
      cardNumber: 'G',

      HeaderTittle:'Virus: Measles, Mumps, Rubella (MMR)',
      TSPTittle:'Measles, Mumps, Rubella (MMR): Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for MMR',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/MMR.jpg',
      DescriptionPart: 'The MMR vaccine provides protection against three viral diseases: measles, mumps, and rubella. Measles can cause severe respiratory symptoms and rash, mumps leads to swollen salivary glands, and rubella (German measles) is particularly dangerous for pregnant women as it can cause congenital rubella syndrome in the fetus.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Respiratory droplets from coughing or sneezing.
          </br></br>
      <h3>Symptoms:</h3>
      - Measles: High fever, cough, runny nose, red eyes, rash.</br>
      - Mumps: Swollen glands, fever, headache, muscle aches.</br>
      - Rubella: Mild fever, rash, swollen glands.
      
        </br></br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Good hygiene practices, such as hand washing.
      
        </br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - MMR: 2 doses.  
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - 12-15 months, and 4-6 years.
      `
    },
    
    {
      cardNumber: 'H',

      HeaderTittle:'Virus: Varicella (Chickenpox)',
      TSPTittle:'Varicella: Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for Varicella (Chickenpox)',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/chickenpox.jpg',
      DescriptionPart: 'Varicella, commonly known as chickenpox, is a highly contagious viral infection that causes an itchy rash with red spots and blisters. It mainly affects children, but can also occur in adults and can lead to more severe complications in certain populations.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Respiratory droplets from coughing or sneezing.</br>
      - Direct contact with blister fluid.
      
          </br></br>
      <h3>Symptoms:</h3>
      - Itchy rash with blisters</br>
      - Fever</br>
      - Tiredness</br>
      - Loss of appetite</br>
        
        </br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Avoiding contact with infected individuals.
      
        </br></br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - Varicella: 2 doses.
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - 12-15 months, and 4-6 years.
      `
    },
    
    {
      cardNumber: 'I',

      HeaderTittle:'Virus: Hepatitis A (HepA)',
      TSPTittle:'Hepatitis A (HepA): Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for Hepatitis A',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/Hepatitis A.jpg',
      DescriptionPart: 'Hepatitis A is a viral liver disease caused by the Hepatitis A Virus (HAV). It is typically spread through ingestion of contaminated food or water and can cause mild to severe illness. Unlike Hepatitis B, it does not cause chronic liver disease but can result in debilitating symptoms and liver inflammation.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Fecal-oral route, through contaminated water or food.
          </br></br>
      <h3>Symptoms:</h3>
      - Fatigue</br>
      - Nausea and vomiting</br>
      - Abdominal pain</br>
      - Jaundice</br>
      - Fever
      
        </br></br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Good sanitation and hygiene practices.
      
        </br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - HepA: 2 doses.
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - 12-23 months, with the second dose 6-18 months after the first.
      `
    },
    
    {
      cardNumber: 'J',

      HeaderTittle:'Virus: Human Papillomavirus (HPV)',
      TSPTittle:'Human Papillomavirus (HPV): Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for (HPV)',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/hpv.jpg',
      DescriptionPart: 'Human Papillomavirus (HPV) is a group of related viruses, some of which can cause genital warts and are associated with several types of cancer, including cervical, anal, and throat cancers. It is one of the most common sexually transmitted infections worldwide.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      - Direct skin-to-skin contact.</br>
      - Sexual contact.
      
          </br></br>
      <h3>Symptoms:</h3>
      - Often asymptomatic</br>
      - Genital warts</br>
      - Abnormal Pap tests</br>
      
        </br>
      <h3>Prevention:</h3>
      - Vaccination is the most effective prevention method.</br>
      - Regular screening (Pap tests).
      
        </br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      - HPV: 2 or 3 doses depending on the age at initial vaccination.
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      - Starting at 11 Years
      `
    },
    
    {
      cardNumber: 'K',

      HeaderTittle:'Virus: Meningococcal Conjugate (MCV4)',
      TSPTittle:'Meningococcal Conjugate (MCV4): Transmission, Symptoms & Prevention',
      DoseTittle:'Standard Schedule for Meningococcal Conjugate',
      PeriodTittle:'Vaccination Age periode',
      
      headerImage: '/img/VaccinePatient/MCV4.jpg',
      DescriptionPart: 'The Meningococcal Conjugate Vaccine (MCV4) protects against meningococcal disease, a severe bacterial infection caused by Neisseria meningitidis. This disease can lead to bacterial meningitis and septicemia, both of which can be fatal if not treated promptly. Meningococcal disease can cause rapid and severe health complications, making vaccination crucial for prevention.',
      TSPPart: `
      <h3>Transmission: (Pertussis)</h3>
      -	Respiratory droplets from coughing or sneezing.</br>
      -	Close contact with an infected person.</br>
      
          </br>
      <h3>Symptoms:</h3>            
      -	Sudden fever</br>
      -	Headache</br>
      -	Stiff neck</br>
      -	Nausea and vomiting</br>
      -	Sensitivity to light</br>
      -	Confusion</br>
      -	Rash (in cases of septicemia)</br>

        </br>
      <h3>Prevention:</h3>
      -	Vaccination is the most effective prevention method.</br>
      -	Good hygiene practices, such as hand washing.</br>
      -	Avoiding close contact with infected individuals.</br>
      
        </br>
      `,

      DosePart:`
      <h3>Vaccine/Dose Schedule:</h3>
      -	MCV4: Typically given in 2 doses.
      `,
      AgePeriodePart: `
      <h3>Age Period:</h3>
      -	First dose at 11-12 years.
      -	Booster dose at 16 years.
      
      `
    },
    

]


const postContainer = document.querySelector('.vaccineItems');



const postMethods = ()=>{
    cardData.map((postData)=>{  
        // console.log(postData.cardNumber + ShowDescription)
        // console.log(postData)
        let ShowDescription= 'A';
        let ShowTSP ='B';
        let ShowDose= 'C';
        let ShowPeriode= 'D';
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML=`
        <img src="${postData.headerImage}" class="card-img-top" alt="">
        <div class="card-body">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${postData.cardNumber + ShowDescription}" aria-expanded="false" aria-controls="${postData.cardNumber + ShowDescription}">${postData.HeaderTittle}</button>
            </h2>
            <div id="${postData.cardNumber + ShowDescription}" class="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>${postData.DescriptionPart}</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${postData.cardNumber + ShowTSP}" aria-expanded="false" aria-controls="${postData.cardNumber + ShowTSP}">
              <p>${postData.TSPTittle}</p>
              </button>
            </h2>
            <div id="${postData.cardNumber + ShowTSP}" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>${postData.TSPPart}</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${postData.cardNumber + ShowDose}" aria-expanded="false" aria-controls="${postData.cardNumber + ShowDose}">
              ${postData.DoseTittle}
              </button>
            </h2>
            <div id="${postData.cardNumber + ShowDose}" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              ${postData.DosePart}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${postData.cardNumber + ShowPeriode}" aria-expanded="false" aria-controls="${postData.cardNumber + ShowPeriode}">
              ${postData.PeriodTittle}
              </button>
            </h2>
            <div id="${postData.cardNumber + ShowPeriode}" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>${postData.AgePeriodePart}</p>
              </div>
            </div>
          </div>
        </div>
        `
        postContainer.appendChild(postElement)
    }
  )
}

postMethods()
