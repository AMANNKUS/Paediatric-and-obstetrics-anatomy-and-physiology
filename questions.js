const questions = [

    {
  question: "Which placental hormone plays an important role in glucose metabolism during pregnancy?",
  options: {
    A: "Progesterone",
    B: "Human placental lactogen (HPL)",
    C: "Human chorionic gonadotrophin (HCG)"
  },
  correctAnswer: "B",
  rationaleCorrect: "Human placental lactogen is produced by the placenta and plays an important role in maternal glucose metabolism during pregnancy. It promotes insulin resistance, allowing more glucose to remain available for the growing foetus.",
  rationalesIncorrect: {
    A: "Progesterone helps maintain pregnancy and relaxes smooth muscles, but it is not the main hormone responsible for pregnancy-related changes in glucose metabolism.",
    C: "Human chorionic gonadotrophin maintains the corpus luteum in early pregnancy and supports progesterone production, but it is not the main hormone linked with glucose metabolism in pregnancy."
  }
},

{
  question: "A 13-year-old girl diagnosed with leukaemia presents with profuse uterine bleeding. Which initial therapy is most appropriate for urgent control of the bleeding?",
  options: {
    A: "Combined oral contraceptive pills",
    B: "Levonorgestrel intrauterine device (IUD)",
    C: "Depot medroxyprogesterone acetate (DMPA)"
  },
  correctAnswer: "A",
  rationaleCorrect: "Combined oral contraceptive pills can be used as urgent hormonal therapy to control acute heavy uterine bleeding in adolescents. They act faster than long-term menstrual suppression methods and are commonly used before considering invasive options.",
  rationalesIncorrect: {
    B: "A levonorgestrel intrauterine device may help with long-term menstrual control, but it is not the best immediate treatment for profuse acute bleeding.",
    C: "Depot medroxyprogesterone acetate may be used for menstrual suppression, but it does not act as quickly as combined oral contraceptive pills in controlling acute heavy uterine bleeding."
  }
},

{
  question: "A 19-year-old G1P0 at 33 weeks of gestation presents with severe headache, visual spots, worsening oedema, and a blood pressure of 173/112 mmHg. While awaiting laboratory results, which finding most strongly supports suspected pre-eclampsia?",
  options: {
    A: "Persistent neurological symptoms",
    B: "Severe-range blood pressures",
    C: "HELLP syndrome"
  },
  correctAnswer: "B",
  rationaleCorrect: "A blood pressure of 173/112 mmHg after 20 weeks of gestation is in the severe range and strongly supports suspected pre-eclampsia with severe features. Severe-range blood pressure is an important objective warning sign in hypertensive disorders of pregnancy.",
  rationalesIncorrect: {
    A: "Persistent headache and visual disturbances are important warning symptoms, but the most objective evidence among the options is the severe-range blood pressure.",
    C: "HELLP syndrome requires laboratory evidence such as haemolysis, elevated liver enzymes, and low platelet count. Since laboratory results are still pending, this cannot yet be confirmed."
  }
},

{
  question: "A 20-year-old woman had unprotected intercourse 4 days ago and is worried about pregnancy. What is the most effective recommended emergency contraception?",
  options: {
    A: "Levonorgestrel IUD",
    B: "Copper intrauterine device",
    C: "Oral mifepristone"
  },
  correctAnswer: "B",
  rationaleCorrect: "The copper intrauterine device is the most effective form of emergency contraception when inserted within 5 days, or 120 hours, after unprotected intercourse. It also provides ongoing contraception after insertion.",
  rationalesIncorrect: {
    A: "A levonorgestrel IUD is effective for long-term contraception, but the copper IUD remains the classic and most effective emergency contraception option.",
    C: "Oral mifepristone is not the standard recommended emergency contraception option in many routine clinical settings."
  }
},

{
  question: "What is the approximate pH of prostatic secretion?",
  options: {
    A: "2.2",
    B: "4.4",
    C: "6.6"
  },
  correctAnswer: "C",
  rationaleCorrect: "Prostatic fluid is slightly acidic. A pH around 6.4 to 6.6 fits the expected acidity of prostatic secretion.",
  rationalesIncorrect: {
    A: "A pH of 2.2 is too strongly acidic and is not compatible with normal prostatic secretion.",
    B: "A pH of 4.4 is also too acidic for normal prostatic fluid."
  }
},

{
  question: "A 20-year-old woman presents with a smooth, mobile 2 cm breast mass with no skin changes or nipple discharge. What is the best initial recommendation?",
  options: {
    A: "Mammography",
    B: "Excision of the mass",
    C: "Ultrasound examination"
  },
  correctAnswer: "C",
  rationaleCorrect: "In a young woman with a smooth, mobile breast mass, ultrasound is the preferred initial imaging method. It helps determine whether the mass is solid or cystic and is more suitable for dense breast tissue in younger women.",
  rationalesIncorrect: {
    A: "Mammography is less useful as the first investigation in a 20-year-old because younger women usually have denser breast tissue.",
    B: "Excision is not the first step unless imaging or biopsy shows suspicious features, rapid growth, or other concerning findings."
  }
},

{
  question: "A 24-year-old G2P1 at 39 weeks has a positive group B streptococcus culture and a history of penicillin anaphylaxis. The culture sensitivity report is unavailable. Which antibiotic is most appropriate?",
  options: {
    A: "Erythromycin",
    B: "Vancomycin",
    C: "Clindamycin"
  },
  correctAnswer: "B",
  rationaleCorrect: "Vancomycin is appropriate for intrapartum group B streptococcal prophylaxis in a woman with severe penicillin allergy when clindamycin susceptibility is unknown or cannot be confirmed.",
  rationalesIncorrect: {
    A: "Erythromycin is not preferred for intrapartum group B streptococcal prophylaxis because of resistance concerns.",
    C: "Clindamycin may be used only when the organism is known to be susceptible. In this case, the culture report is unavailable, so susceptibility cannot be confirmed."
  }
},

{
  question: "A 24-year-old G2P1 at 10 weeks of gestation is worried after receiving an abdominal and pelvic CT scan about 6 weeks earlier when her pregnancy test was mistakenly reported as negative. What is the likely effect on the foetus?",
  options: {
    A: "Microcephaly",
    B: "No effect",
    C: "Intrauterine growth restriction"
  },
  correctAnswer: "B",
  rationaleCorrect: "A single diagnostic CT scan usually exposes the foetus to a radiation dose below the level associated with fetal anomaly, growth restriction, or pregnancy loss. Therefore, the foetus will most likely have no harmful effect.",
  rationalesIncorrect: {
    A: "Microcephaly is associated with much higher radiation exposure, especially during sensitive periods of brain development.",
    C: "Intrauterine growth restriction is not expected from the usual radiation dose of a single diagnostic CT scan."
  }
},

{
  question: "A 25-year-old G3P2 has intrauterine fetal death at 24 weeks. She has one previous vaginal delivery and one previous caesarean section. Her cervix is closed, thick, and high. What is the best management?",
  options: {
    A: "Repeat caesarean section with low transverse hysterotomy",
    B: "Induction of labour with oxytocin",
    C: "Induction of labour with prostaglandin"
  },
  correctAnswer: "C",
  rationaleCorrect: "At 24 weeks with intrauterine fetal death and an unfavourable cervix, induction with prostaglandin is appropriate because it helps ripen the cervix and initiate uterine contractions.",
  rationalesIncorrect: {
    A: "Caesarean delivery is generally avoided in intrauterine fetal death unless there is a clear maternal indication, because it increases surgical risk without fetal benefit.",
    B: "Oxytocin may be useful later, but with a closed, thick, high cervix, prostaglandin is more appropriate for cervical ripening."
  }
},

{
  question: "A 25-year-old woman who recently had gastric bypass surgery requests contraception. She has irregular vaginal bleeding due to submucosal fibroids. Which contraceptive method is best?",
  options: {
    A: "Copper IUD",
    B: "Norplant levonorgestrel",
    C: "Combined oral contraceptive pill"
  },
  correctAnswer: "B",
  rationaleCorrect: "A levonorgestrel implant is a good option because it avoids the absorption problems that may occur with oral contraceptives after gastric bypass surgery. It is also highly effective and does not contain oestrogen.",
  rationalesIncorrect: {
    A: "A copper IUD is effective, but it may worsen menstrual bleeding and cramps, which is not ideal for a woman already experiencing irregular bleeding from submucosal fibroids.",
    C: "Combined oral contraceptive pills may be less reliable after malabsorptive bariatric surgery because absorption can be reduced."
  }
},

{
  question: "A 25-year-old woman with a history of deep vein thrombosis is planning pregnancy and is currently on warfarin. Which fetal side effect of warfarin should she be counselled about?",
  options: {
    A: "Fetal blindness",
    B: "Fetal hypoplasia of nasal bones",
    C: "Maternal thrombocytopenia"
  },
  correctAnswer: "B",
  rationaleCorrect: "Warfarin crosses the placenta and can cause fetal warfarin syndrome, which includes nasal hypoplasia. This is one reason warfarin is avoided during pregnancy and heparin is preferred.",
  rationalesIncorrect: {
    A: "Fetal blindness is not the classic adverse effect associated with warfarin exposure in pregnancy.",
    C: "Maternal thrombocytopenia is more closely associated with heparin therapy, especially heparin-induced thrombocytopenia, not fetal warfarin syndrome."
  }
},

{
  question: "A 26-year-old G2P1 at 28 weeks of gestation is O negative and the father is B positive. She is found to have a positive antibody screen. What is the next step in management?",
  options: {
    A: "Cordocentesis",
    B: "Give mother anti-D immunoglobulin",
    C: "Intrauterine blood transfusion"
  },
  correctAnswer: "B",
  rationaleCorrect: "This question likely has a wording issue. Anti-D immunoglobulin is normally given to an Rh-negative pregnant woman at around 28 weeks if she is not already sensitised. If the antibody screen is truly positive, antibody identification and titre assessment would usually be required. Since that option is not provided, the exam-intended answer is anti-D immunoglobulin.",
  rationalesIncorrect: {
    A: "Cordocentesis is invasive and is not the first step for routine Rh prophylaxis. It may be considered later if there is evidence of significant fetal anaemia.",
    C: "Intrauterine blood transfusion is only done when the foetus has severe anaemia, not as the first step at routine follow-up."
  }
},

{
  question: "A 26-year-old G2P1 at 28 weeks has an anti-D titre of 1:64. Fetal DNA is obtained through amniocentesis to determine fetal antigen status. What is the next step in management?",
  options: {
    A: "Assessment of middle cerebral artery blood flow",
    B: "Intrauterine blood transfusion",
    C: "Cordocentesis"
  },
  correctAnswer: "A",
  rationaleCorrect: "A high anti-D titre suggests risk of fetal anaemia. The next step is non-invasive fetal surveillance using Doppler assessment of the middle cerebral artery, because increased MCA peak systolic velocity suggests fetal anaemia.",
  rationalesIncorrect: {
    B: "Intrauterine blood transfusion is not done immediately. It is considered if further assessment confirms significant fetal anaemia.",
    C: "Cordocentesis is invasive and is usually reserved for cases where fetal anaemia needs confirmation or treatment planning."
  }
},

{
  question: "A 26-year-old gravida 1 woman at 18 weeks of gestation has episodic unilateral throbbing headache worsened by movement, light, and sound. The pain is relieved by paracetamol. What is the most likely type of headache?",
  options: {
    A: "Migraine",
    B: "Cluster",
    C: "Tension"
  },
  correctAnswer: "A",
  rationaleCorrect: "Migraine headache is typically unilateral, throbbing, worsened by movement, and associated with sensitivity to light and sound. The episodic nature of the headache also supports migraine.",
  rationalesIncorrect: {
    B: "Cluster headache usually causes severe pain around one eye and is commonly associated with tearing, nasal congestion, or redness of the eye. These features are absent here.",
    C: "Tension headache is usually bilateral, pressing or tight in nature, and is not typically worsened by movement or strongly associated with light and sound sensitivity."
  }
},

{
  question: "A 27-year-old woman with an IUCD presents with pelvic pain, purulent vaginal discharge, fever, nausea, vomiting, and cervical motion tenderness. What is the next best step in management?",
  options: {
    A: "Leave the IUCD in place and give inpatient therapy with intravenous antibiotics",
    B: "Remove the IUCD and give outpatient therapy with oral antibiotics",
    C: "Remove the IUCD and give inpatient therapy with intravenous antibiotics"
  },
  correctAnswer: "A",
  rationaleCorrect: "This patient has features of pelvic inflammatory disease. The IUCD does not need to be removed immediately if treatment is started; removal may be considered if there is no clinical improvement after 48 to 72 hours. Nausea and vomiting support inpatient intravenous therapy because oral treatment may not be tolerated.",
  rationalesIncorrect: {
    B: "Immediate IUCD removal is not required, and vomiting makes outpatient oral antibiotic therapy less suitable.",
    C: "Inpatient intravenous antibiotics are appropriate, but immediate IUCD removal is not the first step."
  }
},

{
  question: "A 27-year-old G3P0 underwent left salpingostomy for ruptured ectopic pregnancy 3 weeks ago. She now has lower abdominal pain and still feels pregnant. What is the next best step in management?",
  options: {
    A: "Obtain a pelvic ultrasound",
    B: "Repeat HCG in 48 hours",
    C: "Immediate surgical intervention"
  },
  correctAnswer: "B",
  rationaleCorrect: "After salpingostomy, persistent trophoblastic tissue may remain. Serial beta-HCG monitoring is important because HCG should fall after successful treatment. Repeating HCG helps determine whether active pregnancy tissue is still present.",
  rationalesIncorrect: {
    A: "Pelvic ultrasound may help in some cases, but serial HCG is more useful for detecting persistent ectopic trophoblastic tissue after salpingostomy.",
    C: "Immediate surgery is not the next step unless the patient is unstable or has signs of rupture or internal bleeding."
  }
},

{
  question: "A 27-year-old woman develops a lower limb deep vein thrombosis after orthopaedic surgery and is on therapeutic anticoagulation. She has been using a combined oral contraceptive pill. What is the best contraceptive step?",
  options: {
    A: "Transition to a lower-dose oral contraceptive pill",
    B: "Transition to a levonorgestrel IUD",
    C: "Discontinue the combined oral contraceptive"
  },
  correctAnswer: "B",
  rationaleCorrect: "A woman with deep vein thrombosis should avoid oestrogen-containing contraception because oestrogen increases thrombotic risk. A levonorgestrel IUD provides effective contraception without oestrogen and is appropriate while she is on anticoagulation.",
  rationalesIncorrect: {
    A: "Even lower-dose combined oral contraceptive pills still contain oestrogen and are not appropriate in a patient with active DVT.",
    C: "The combined pill should be stopped, but simply stopping it does not provide an alternative contraceptive method. Transitioning to a safer method is the better answer."
  }
},

{
  question: "A 28-year-old G2P1 at 39 weeks is undergoing trial of labour after a previous low transverse caesarean section. What is the most common sign of uterine rupture during trial of labour?",
  options: {
    A: "New onset severe abdominal pain",
    B: "Worsening fetal heart rate pattern",
    C: "Loss of fetal station"
  },
  correctAnswer: "B",
  rationaleCorrect: "The most common sign of uterine rupture during trial of labour after caesarean delivery is an abnormal or worsening fetal heart rate pattern, especially fetal bradycardia.",
  rationalesIncorrect: {
    A: "Severe abdominal pain may occur, but it is not the most common sign and may be difficult to distinguish from labour pain.",
    C: "Loss of fetal station can occur with uterine rupture, but it is less common than fetal heart rate abnormality."
  }
},

{
  question: "A 30-year-old woman with a history of migraine presents 24 hours after unprotected intercourse. Which emergency contraceptive regimen would you give?",
  options: {
    A: "Postinor 2",
    B: "Depo Provera",
    C: "Insertion of copper IUD"
  },
  correctAnswer: "A",
  rationaleCorrect: "Postinor 2 contains levonorgestrel and can be used as emergency contraception after unprotected intercourse. It is suitable for a woman with migraine because it does not contain oestrogen.",
  rationalesIncorrect: {
    B: "Depo Provera is a regular contraceptive injection and is not used as an emergency contraceptive regimen.",
    C: "A copper IUD is the most effective emergency contraception overall, but the question asks for an emergency contraceptive regimen, and Postinor 2 is the expected answer here."
  }
},

{
  question: "A 30-year-old multiparous woman with chronic hypertension stopped her usual medications when she became pregnant. At 22 weeks, her blood pressure is 148/90 mmHg with no proteinuria. What is the next best step in management?",
  options: {
    A: "Magnesium sulfate",
    B: "Methyldopa",
    C: "No medication"
  },
  correctAnswer: "B",
  rationaleCorrect: "This patient has chronic hypertension in pregnancy. Methyldopa is one of the antihypertensive medicines that can be used safely in pregnancy and is appropriate for blood pressure control.",
  rationalesIncorrect: {
    A: "Magnesium sulfate is used mainly for seizure prevention or treatment in pre-eclampsia and eclampsia, not for routine control of chronic hypertension.",
    C: "No medication is not the best option because she has chronic hypertension and her blood pressure is elevated. Pregnancy-compatible antihypertensive therapy is appropriate."
  }
},

{
  question: "A 32-year-old woman with a body mass index of 40 attends a preconception visit. Which pregnancy complication is increased due to obesity?",
  options: {
    A: "Isoimmunisation",
    B: "Placental abruption",
    C: "Spina bifida"
  },
  correctAnswer: "C",
  rationaleCorrect: "Maternal obesity is associated with an increased risk of neural tube defects, including spina bifida. Preconception counselling should include weight optimisation and folic acid supplementation.",
  rationalesIncorrect: {
    A: "Isoimmunisation is related to maternal-fetal blood group incompatibility, not obesity.",
    B: "Obesity is linked with several pregnancy complications, but spina bifida is the best answer among the options."
  }
},

{
  question: "A 32-year-old woman had a breast cyst aspirated, yielding straw-coloured fluid. Four months later, the cyst has recurred as a soft, mobile 3 cm mass. What is the best next step?",
  options: {
    A: "Ultrasonography",
    B: "Dietary modification",
    C: "Repeat aspiration"
  },
  correctAnswer: "C",
  rationaleCorrect: "A recurrent breast cyst after previous aspiration should be reaspirated. If it recurs again, persists, or produces suspicious fluid, further evaluation such as biopsy may be needed.",
  rationalesIncorrect: {
    A: "Ultrasonography can help assess a breast lump, but in a previously confirmed recurrent cyst, repeat aspiration is the best next step.",
    B: "Dietary modification is not the best evaluation or treatment for a recurrent palpable breast cyst."
  }
},

{
  question: "A 34-year-old woman preparing for infertility treatment is counselled on reducing the risk of having a baby with a neural tube defect. Which supplement should she take?",
  options: {
    A: "Folic acid",
    B: "Pyridoxine",
    C: "Thiamine"
  },
  correctAnswer: "A",
  rationaleCorrect: "Folic acid taken before conception and during early pregnancy reduces the risk of neural tube defects such as spina bifida and anencephaly.",
  rationalesIncorrect: {
    B: "Pyridoxine is vitamin B6. It may help with nausea and other body functions, but it is not the key supplement for preventing neural tube defects.",
    C: "Thiamine is vitamin B1. It is important for metabolism and nerve function, but it does not specifically prevent neural tube defects."
  }
},

{
  question: "The common causes of seizures in the neonate include the following, except:",
  options: {
    A: "Birth trauma",
    B: "Intraventricular haemorrhage",
    C: "Genetic defects"
  },
  correctAnswer: "C",
  rationaleCorrect: "Genetic defects can cause neonatal epilepsy, but in basic neonatal seizure questions, the common immediate causes include birth trauma, hypoxic injury, intracranial bleeding, metabolic problems, and infection. Therefore, genetic defects is the best exception among the options.",
  rationalesIncorrect: {
    A: "Birth trauma can cause intracranial injury and may lead to neonatal seizures.",
    B: "Intraventricular haemorrhage is an important cause of neonatal seizures, especially in vulnerable newborns."
  }
},
{
  question: "A 34-year-old nulliparous woman presents with worsening dysmenorrhoea for the past 8 months. The pain begins 3 days before menses, peaks on the second day of bleeding, and persists chronically at a low level. Examination shows a small retroverted uterus and normal adnexa. What is the next best option?",
  options: {
    A: "Gonadotropin-releasing hormone therapy",
    B: "Continued use of oral contraceptive pill",
    C: "Depot medroxyprogesterone acetate"
  },
  correctAnswer: "B",
  rationaleCorrect: "The symptoms suggest secondary dysmenorrhoea, possibly due to endometriosis. Oral contraceptive pills help suppress ovulation and reduce menstrual-related pelvic pain, making them a common initial medical treatment option.",
  rationalesIncorrect: {
    A: "Gonadotropin-releasing hormone therapy may be used for persistent or severe endometriosis-related pain, but it is usually not the first option because of side effects such as bone loss and menopausal symptoms.",
    C: "Depot medroxyprogesterone acetate can suppress menstruation and reduce pain, but oral contraceptive pills are commonly used first unless there is a contraindication."
  }
},

{
  question: "A 35-year-old multiparous woman wants contraception now but may desire pregnancy in the future. She also wants to reduce her risk of ovarian cancer. Which contraceptive method is most appropriate?",
  options: {
    A: "Bilateral tubal ligation",
    B: "Levonorgestrel intrauterine device",
    C: "Combined oral contraceptives"
  },
  correctAnswer: "C",
  rationaleCorrect: "Combined oral contraceptives reduce the risk of ovarian cancer and are reversible. This makes them suitable for a woman who wants contraception now but may want pregnancy in the future.",
  rationalesIncorrect: {
    A: "Bilateral tubal ligation is a permanent method of contraception and is not appropriate because she may desire future pregnancy.",
    B: "A levonorgestrel intrauterine device is a good reversible contraceptive method, but combined oral contraceptives are more classically associated with reduced ovarian cancer risk."
  }
},

{
  question: "A mother reports that her baby makes a noisy sound during inspiration, which becomes worse when the baby cries. What condition best explains this finding?",
  options: {
    A: "Pyloric stenosis",
    B: "Laryngeal stridor",
    C: "Choanal atresia"
  },
  correctAnswer: "B",
  rationaleCorrect: "Laryngeal stridor is a noisy breathing sound usually heard during inspiration. It may become more obvious during crying because airflow increases through a narrowed or floppy upper airway.",
  rationalesIncorrect: {
    A: "Pyloric stenosis causes projectile vomiting, not noisy breathing.",
    C: "Choanal atresia causes nasal obstruction and breathing difficulty, especially during feeding, but inspiratory noise worsened by crying fits stridor better."
  }
},

{
  question: "A 35-year-old gravida 1 woman with a body mass index of 45 kg/m² undergoes caesarean delivery through a Pfannenstiel incision. Which surgical technique is most likely to reduce wound breakdown?",
  options: {
    A: "Subcutaneous closure",
    B: "Placement of a subcutaneous drain",
    C: "Skin closure with staples"
  },
  correctAnswer: "A",
  rationaleCorrect: "In obese women undergoing caesarean section, closure of the subcutaneous tissue when the fat layer is thick helps reduce wound disruption and wound breakdown.",
  rationalesIncorrect: {
    B: "Subcutaneous drains are not routinely recommended for preventing wound breakdown and may not reduce wound complications.",
    C: "Skin closure with staples may be associated with more wound complications compared with sutures, especially in obese women."
  }
},

{
  question: "A baby is born pale with peeling and cracked skin, overgrown nails, and abundant scalp hair. What is the most likely maturity status of the baby?",
  options: {
    A: "Small for date",
    B: "Preterm",
    C: "Post-term"
  },
  correctAnswer: "C",
  rationaleCorrect: "Post-term babies may have dry, peeling, cracked skin, long nails, abundant scalp hair, and a wasted-looking appearance. These features suggest the baby remained in utero beyond term.",
  rationalesIncorrect: {
    A: "A small-for-date baby may have low birth weight, but peeling skin, overgrown nails, and abundant scalp hair point more towards post-maturity.",
    B: "Preterm babies usually have thin skin, less subcutaneous fat, and immature features, not overgrown nails and post-mature skin changes."
  }
},

{
  question: "A 36-year-old non-lactating woman presents with a 2-month history of bloody nipple discharge from the left breast. No mass is palpable. What is the most appropriate management?",
  options: {
    A: "Observation alone",
    B: "Diagnostic mammography with ultrasound",
    C: "Measure serum prolactin and TRH levels"
  },
  correctAnswer: "B",
  rationaleCorrect: "Bloody nipple discharge, especially when unilateral and persistent, requires breast imaging. Diagnostic mammography with ultrasound helps assess for intraductal papilloma, duct disease, or malignancy.",
  rationalesIncorrect: {
    A: "Observation alone is unsafe because bloody nipple discharge may be associated with significant breast pathology.",
    C: "Serum prolactin assessment is more useful for milky nipple discharge, not bloody discharge."
  }
},

{
  question: "A 38-year-old woman with symptomatic fibroids is considering uterine fibroid embolisation. What is the most common complication associated with this procedure?",
  options: {
    A: "Vaginal passage of a myoma",
    B: "Infection",
    C: "Post-embolisation syndrome"
  },
  correctAnswer: "C",
  rationaleCorrect: "Post-embolisation syndrome is a common complication after uterine fibroid embolisation. It may present with pelvic pain, fever, malaise, nausea, and inflammatory symptoms after the procedure.",
  rationalesIncorrect: {
    A: "Vaginal passage of a myoma can occur, especially with submucosal fibroids, but it is not the most common complication.",
    B: "Infection is a possible complication, but it is less common than post-embolisation syndrome."
  }
},

{
  question: "A 38-year-old woman with symptomatic fibroids is considering myomectomy. What is the most common complication associated with this procedure?",
  options: {
    A: "Adhesion",
    B: "Vaginal passage of a myoma",
    C: "Post-embolisation syndrome"
  },
  correctAnswer: "A",
  rationaleCorrect: "Adhesion formation is a common complication after myomectomy because surgery on the uterus and pelvis can lead to postoperative scar tissue formation.",
  rationalesIncorrect: {
    B: "Vaginal passage of a myoma is more associated with uterine fibroid embolisation, especially when a submucosal fibroid is expelled.",
    C: "Post-embolisation syndrome is associated with embolisation procedures, not myomectomy."
  }
},

{
  question: "A 4-day-old neonate is brought to the facility with irritability, excessive shaking, weakness, and an abnormal cry. What is the best action for the midwife?",
  options: {
    A: "Reassure the mother",
    B: "Prescribe medications",
    C: "Refer to the paediatrician"
  },
  correctAnswer: "C",
  rationaleCorrect: "Irritability, excessive shaking, weakness, and abnormal cry in a neonate may suggest serious conditions such as neonatal seizures, infection, metabolic disturbance, or neurological problems. The baby requires urgent specialist assessment.",
  rationalesIncorrect: {
    A: "Reassurance alone is unsafe because the symptoms may indicate a serious neonatal condition.",
    B: "The midwife should not simply prescribe medication without proper assessment and diagnosis by the appropriate clinician."
  }
},

{
  question: "A 42-year-old G3P3 with a history of bilateral tubal ligation presents with irregular heavy menses occurring every 21 to 60 days. She has completed childbearing. Which statement is not true?",
  options: {
    A: "Endometrial sampling should be taken to exclude endometrial hyperplasia",
    B: "Endometrial ablation is a first-line treatment option",
    C: "Pregnancy testing should be performed at this visit"
  },
  correctAnswer: "B",
  rationaleCorrect: "Endometrial ablation is not a first-line treatment before proper evaluation. A woman with abnormal uterine bleeding should first be assessed to exclude pregnancy, structural causes, endometrial hyperplasia, or malignancy when indicated.",
  rationalesIncorrect: {
    A: "Endometrial sampling may be appropriate, especially when abnormal bleeding is persistent or when risk factors for endometrial hyperplasia are present.",
    C: "Pregnancy should still be excluded in reproductive-aged women with abnormal bleeding, even with a history of tubal ligation, because failure can rarely occur."
  }
},

{
  question: "A 44-year-old woman presents 5 days after unprotected intercourse and is worried about unwanted pregnancy. She has chronic hypertension, insulin-controlled diabetes mellitus, migraine, and obesity. Which emergency contraceptive method is most appropriate?",
  options: {
    A: "Combined oral contraceptive pill",
    B: "Levonorgestrel emergency contraception",
    C: "IUCD"
  },
  correctAnswer: "C",
  rationaleCorrect: "A copper IUCD is the most effective emergency contraception and can be inserted within 5 days after unprotected intercourse. Its effectiveness is not reduced by high body weight.",
  rationalesIncorrect: {
    A: "Combined oral contraceptive pills contain oestrogen and may not be suitable in a 44-year-old woman with chronic hypertension, diabetes, migraine, and obesity.",
    B: "Levonorgestrel emergency contraception can be used, but it may be less effective in women with high body weight, and an IUCD is more effective."
  }
},

{
  question: "A 45-year-old woman has mammography showing suspicious pleomorphic calcifications. Stereotactic core biopsy reveals normal breast tissue with no calcifications present. What should you tell her?",
  options: {
    A: "The histology is benign and she does not have to worry",
    B: "She should undergo needle localisation excisional biopsy",
    C: "She can resume annual clinical breast examination and mammography"
  },
  correctAnswer: "B",
  rationaleCorrect: "The biopsy result is discordant because the mammogram showed suspicious calcifications, but the biopsy did not retrieve calcifications. This suggests the suspicious area may have been missed, so excisional biopsy is needed for accurate diagnosis.",
  rationalesIncorrect: {
    A: "This is unsafe because the biopsy may not have sampled the abnormal calcified area.",
    C: "Routine follow-up is inappropriate when imaging and pathology findings do not match."
  }
},

{
  question: "A 48-year-old woman has a breast cyst aspirated, but dark fluid is obtained and a residual mass remains. What professional advice should be given?",
  options: {
    A: "Mammography and ultrasound will be appropriate",
    B: "Come for review in 6 weeks for re-examination",
    C: "The mass should be ignored because it is benign"
  },
  correctAnswer: "A",
  rationaleCorrect: "If aspiration of a breast cyst leaves a residual mass, further evaluation is needed. Mammography and ultrasound help assess whether there is an underlying solid lesion or suspicious pathology.",
  rationalesIncorrect: {
    B: "Review may be acceptable only if the cyst completely disappears after aspiration. A residual mass requires further assessment.",
    C: "A residual mass after aspiration should never be ignored because it may indicate an underlying solid lesion."
  }
},

{
  question: "A 6-week-old term male infant is brought for postnatal care. He appears jaundiced, and laboratory results show total serum bilirubin of 17.5 mg/dL and direct bilirubin of 12.1 mg/dL. What is the most likely cause of the jaundice?",
  options: {
    A: "Increased intestinal absorption of bilirubin",
    B: "Glucose-6-phosphate dehydrogenase deficiency",
    C: "Paucity of bile ducts in the portal triads"
  },
  correctAnswer: "C",
  rationaleCorrect: "The very high direct bilirubin indicates conjugated hyperbilirubinaemia or neonatal cholestasis. Paucity of bile ducts in the portal triads is associated with cholestatic jaundice, such as in Alagille syndrome.",
  rationalesIncorrect: {
    A: "Increased intestinal absorption of bilirubin usually causes unconjugated jaundice, such as breastfeeding-related jaundice, not marked direct hyperbilirubinaemia.",
    B: "Glucose-6-phosphate dehydrogenase deficiency causes haemolysis and mainly unconjugated hyperbilirubinaemia."
  }
},

{
  question: "A 53-year-old woman with a history of oestrogen-dependent breast cancer has atrophy-related urinary symptoms. What treatment advice is most appropriate?",
  options: {
    A: "Non-hormonal treatments are first-line, with vaginal oestrogen reserved for patients unresponsive to non-hormonal treatment",
    B: "Non-hormonal treatments are first-line, and vaginal oestrogen should never be used due to increased risk of cancer recurrence",
    C: "Vaginal oestrogen is first-line, with non-hormonal treatments reserved for patients unresponsive to non-hormonal treatment"
  },
  correctAnswer: "A",
  rationaleCorrect: "For patients with a history of oestrogen-dependent breast cancer, non-hormonal options such as lubricants and moisturisers are first-line. Low-dose vaginal oestrogen may be considered only when symptoms persist despite non-hormonal treatment, usually after careful discussion and shared decision-making.",
  rationalesIncorrect: {
    B: "This is too absolute. Vaginal oestrogen may be considered in selected cases when non-hormonal treatment fails.",
    C: "Vaginal oestrogen is not first-line in women with a history of oestrogen-dependent breast cancer."
  }
},

{
  question: "A baby develops yellowish discoloration of the eyes 8 hours after birth. What type of jaundice should be suspected?",
  options: {
    A: "Pathological jaundice",
    B: "Physiological jaundice",
    C: "Blood incompatibility"
  },
  correctAnswer: "A",
  rationaleCorrect: "Jaundice appearing within the first 24 hours of life is considered pathological until proven otherwise. It requires urgent assessment because it may be due to haemolysis, infection, blood group incompatibility, or other serious causes.",
  rationalesIncorrect: {
    B: "Physiological jaundice usually appears after the first 24 hours, not at 8 hours of life.",
    C: "Blood incompatibility may be a cause of pathological jaundice, but the best classification from the stem is pathological jaundice."
  }
},

{
  question: "A pregnant woman has an ultrasound scan due to suspected fetal developmental abnormality. The ultrasound reveals an abnormality on the fetal face. What is the most likely diagnosis?",
  options: {
    A: "Anencephaly",
    B: "Micrognathia",
    C: "Facial cleft"
  },
  correctAnswer: "C",
  rationaleCorrect: "An abnormality seen on the fetal face during ultrasound most directly suggests a facial cleft, such as cleft lip with or without cleft palate.",
  rationalesIncorrect: {
    A: "Anencephaly is a neural tube defect involving absence of major parts of the brain and skull, not mainly a facial abnormality.",
    B: "Micrognathia is an abnormally small jaw. It is a facial abnormality, but facial cleft is the more likely answer when the question broadly describes an abnormality on the fetal face."
  }
},

{
  question: "A diabetic mother delivers a large-for-date baby. What is the main reason infants of diabetic mothers may become large?",
  options: {
    A: "Deposition of fats",
    B: "Polycythaemia",
    C: "Hyperinsulinism"
  },
  correctAnswer: "C",
  rationaleCorrect: "In maternal diabetes, excess maternal glucose crosses the placenta and stimulates the fetal pancreas to produce more insulin. Fetal hyperinsulinism promotes growth and fat deposition, resulting in a large-for-date or macrosomic baby.",
  rationalesIncorrect: {
    A: "Fat deposition occurs as a result of fetal hyperinsulinism, but it is not the main underlying mechanism.",
    B: "Polycythaemia can occur in infants of diabetic mothers, but it is not the main reason for macrosomia."
  }
},

{
  question: "A 22-year-old woman has purulent vaginal discharge one week after sexual intercourse with a new partner. Cervical testing is positive for Neisseria gonorrhoeae, and she has no known allergies. Which medication regimen is most appropriate?",
  options: {
    A: "Ceftriaxone and azithromycin",
    B: "Erythromycin",
    C: "Doxycycline"
  },
  correctAnswer: "A",
  rationaleCorrect: "Ceftriaxone is the key treatment for gonorrhoea. In many exam settings, azithromycin is paired with ceftriaxone to cover possible chlamydial coinfection. Among the options given, ceftriaxone with azithromycin is the best answer.",
  rationalesIncorrect: {
    B: "Erythromycin is not the recommended treatment for uncomplicated gonorrhoea.",
    C: "Doxycycline treats chlamydia but is not adequate alone for gonorrhoea."
  }
},

{
  question: "A student midwife asks what causes the Graafian follicle to rupture during ovulation. Which response is the best available answer?",
  options: {
    A: "A surge in oestrogen and progesterone is responsible for this",
    B: "Oestrogen controls this action",
    C: "Relaxin opens the follicle and allows it to rupture"
  },
  correctAnswer: "B",
  rationaleCorrect: "This is the best available option, although the most precise physiological answer is that ovulation is triggered by the luteinising hormone surge. Rising oestrogen from the mature follicle helps trigger the LH surge, which then leads to rupture of the Graafian follicle.",
  rationalesIncorrect: {
    A: "The direct trigger is not a combined oestrogen and progesterone surge. Progesterone rises mainly after ovulation when the corpus luteum forms.",
    C: "Relaxin is not responsible for rupture of the Graafian follicle."
  }
},

{
  question: "A mother brings her 2-week-old exclusively breastfed baby for routine care and asks what supplement the baby needs. Which supplement is recommended?",
  options: {
    A: "Vitamin D",
    B: "Vitamin A",
    C: "Iron"
  },
  correctAnswer: "A",
  rationaleCorrect: "Exclusively breastfed babies need vitamin D supplementation because breast milk alone may not provide enough vitamin D. Infants commonly require 400 IU of vitamin D daily.",
  rationalesIncorrect: {
    B: "Routine vitamin A supplementation is not the standard answer for an exclusively breastfed 2-week-old baby in this context.",
    C: "Term infants usually have enough iron stores for the first few months of life, so vitamin D is the key supplement needed early."
  }
},

{
  question: "A mother reports that her baby has not passed stool since birth. What is the most appropriate first action?",
  options: {
    A: "Examine the abdomen for distension",
    B: "Pass a flatus tube into the anus",
    C: "Pass your index finger into the anus"
  },
  correctAnswer: "A",
  rationaleCorrect: "Failure to pass stool after birth may indicate intestinal obstruction, Hirschsprung disease, or anorectal malformation. The first appropriate action is assessment, including checking for abdominal distension and examining the baby before attempting procedures.",
  rationalesIncorrect: {
    B: "A flatus tube should not be passed before proper assessment because there may be an anorectal malformation or obstruction.",
    C: "Passing an index finger into the anus is invasive and inappropriate as the first step, especially before assessing the abdomen and anal opening."
  }
},

{
  question: "A mother is worried that her 8-week-old baby's anterior fontanelle has not closed. What should the midwife explain as the normal closure time of the anterior fontanelle?",
  options: {
    A: "12–18 months",
    B: "12–18 weeks",
    C: "20–24 weeks"
  },
  correctAnswer: "A",
  rationaleCorrect: "The anterior fontanelle normally closes much later than 8 weeks. It commonly closes around 12–18 months, although there is some normal variation.",
  rationalesIncorrect: {
    B: "12–18 weeks is too early for normal anterior fontanelle closure.",
    C: "20–24 weeks is also too early for the usual closure of the anterior fontanelle."
  }
},

{
  question: "A baby is born with low birth weight and abnormal physical features. The mother had no prenatal care until late pregnancy and has a history of hypertension, epilepsy, and depression. Which factor could explain the baby's condition?",
  options: {
    A: "Phenytoin",
    B: "Cigarette smoke",
    C: "Alcohol"
  },
  correctAnswer: "A",
  rationaleCorrect: "The clue is the mother's history of epilepsy. Phenytoin exposure in pregnancy can cause fetal hydantoin syndrome, which may include growth restriction, low birth weight, and abnormal physical features.",
  rationalesIncorrect: {
    B: "Cigarette smoking can contribute to low birth weight, but the stem does not mention smoking.",
    C: "Alcohol can cause fetal alcohol spectrum disorders, but the stem gives epilepsy as the stronger clue, pointing to possible phenytoin exposure."
  }
},
{
  question: "After delivering the placenta, what should the midwife do immediately?",
  options: {
    A: "Send the mother to the fourth stage room",
    B: "Clean the mother up",
    C: "Examine the perineum"
  },
  correctAnswer: "C",
  rationaleCorrect: "After delivery of the placenta, the midwife should inspect the perineum and birth canal for tears, episiotomy extension, or bleeding. This helps detect trauma early and prevents unnoticed postpartum haemorrhage.",
  rationalesIncorrect: {
    A: "The mother should not be transferred before checking for bleeding, uterine contraction, placenta completeness, and perineal trauma.",
    B: "Cleaning the mother is important, but examination for trauma and bleeding should come first."
  }
},

{
  question: "A baby is born with severe asphyxia due to narcotic analgesia given to the mother during labour. Which medication can be used to counteract the effect of the maternal narcotic?",
  options: {
    A: "Naloxone hydrochloride",
    B: "Sodium bicarbonate",
    C: "Adrenaline"
  },
  correctAnswer: "A",
  rationaleCorrect: "Naloxone is an opioid antagonist. It reverses respiratory depression caused by narcotic analgesics given to the mother during labour.",
  rationalesIncorrect: {
    B: "Sodium bicarbonate is used in severe metabolic acidosis, not to reverse narcotic-induced respiratory depression.",
    C: "Adrenaline is used in neonatal resuscitation when there is severe bradycardia or absent heart rate despite effective ventilation and chest compressions."
  }
},

{
  question: "Which statement about identical twins is correct?",
  options: {
    A: "Identical twins have two different placentae",
    B: "Twins in general develop from two fertilised ova",
    C: "Identical twins may have two separate amniotic bags"
  },
  correctAnswer: "C",
  rationaleCorrect: "Identical twins develop from one fertilised ovum that divides. Depending on when division occurs, they may have separate amniotic sacs.",
  rationalesIncorrect: {
    A: "Identical twins do not always have two different placentae. They may share one placenta or have separate placentae depending on the timing of division.",
    B: "Development from two fertilised ova describes fraternal twins, not all twins."
  }
},

{
  question: "Why is past obstetric history considered during pelvic assessment? I. Babies tend to be bigger with subsequent pregnancies. II. The mother's pelvis widens with increased number of pregnancies. III. Complications of pregnancy may be repeated. IV. Caesarean section cases are ruled out from vaginal deliveries.",
  options: {
    A: "I and II",
    B: "II, III and IV",
    C: "I and III"
  },
  correctAnswer: "C",
  rationaleCorrect: "Past obstetric history is important because babies may be larger in subsequent pregnancies and previous complications may recur. This helps the midwife identify mothers who may need closer monitoring or referral.",
  rationalesIncorrect: {
    A: "Statement I is correct, but statement II is incorrect because the pelvis does not permanently widen with each pregnancy in a way that removes the need for assessment.",
    B: "Statement III is correct, but statements II and IV are incorrect. A previous caesarean section does not automatically rule out vaginal delivery."
  }
},

{
  question: "Cephalo-pelvic disproportion with an average-sized fetal head is more likely to be associated with which type of pelvis?",
  options: {
    A: "Android pelvis",
    B: "Anthropoid pelvis",
    C: "Gynaecoid pelvis"
  },
  correctAnswer: "A",
  rationaleCorrect: "An android pelvis is heart-shaped and has a narrow outlet. It is more likely to cause difficult labour and cephalo-pelvic disproportion, especially when the fetal head is of average size.",
  rationalesIncorrect: {
    B: "An anthropoid pelvis has a long anteroposterior diameter and is generally more favourable than an android pelvis.",
    C: "The gynaecoid pelvis is the most favourable type for vaginal delivery."
  }
},

{
  question: "At the antenatal clinic, why does the midwife observe the pregnant mother's height, gait, and shoe size?",
  options: {
    A: "It gives an idea of the size of the pelvis",
    B: "It is part of history taking",
    C: "It gives a rough idea of the size of the baby"
  },
  correctAnswer: "A",
  rationaleCorrect: "Short stature, abnormal gait, and very small shoe size may suggest a small or abnormal pelvis. These observations help the midwife identify possible risk of cephalo-pelvic disproportion.",
  rationalesIncorrect: {
    B: "These are physical observations, not history-taking information.",
    C: "Maternal height and shoe size give a rough idea of pelvic size, not fetal size."
  }
},

{
  question: "After delivery of the placenta, a student immediately sets it aside and cleans the mother. What should the supervising midwife first prompt the student to do?",
  options: {
    A: "Congratulate the mother",
    B: "Ensure empty uterus",
    C: "Hurry up, you are very slow"
  },
  correctAnswer: "B",
  rationaleCorrect: "After the placenta is delivered, the midwife should ensure that the uterus is empty and well contracted. A retained second twin, retained tissue, or poor uterine contraction can increase the risk of postpartum haemorrhage.",
  rationalesIncorrect: {
    A: "Congratulating the mother is good emotional care, but the immediate clinical priority is to ensure the uterus is empty and contracted.",
    C: "This is unprofessional and does not guide the student on safe clinical care."
  }
},

{
  question: "After ensuring that the uterus is empty following delivery of the placenta, what should the midwife do next?",
  options: {
    A: "Congratulate the mother",
    B: "Observe for placenta separation",
    C: "Administer the uterotonic drug"
  },
  correctAnswer: "A",
  rationaleCorrect: "After ensuring the uterus is empty and the placenta has been delivered, the midwife should provide emotional support and congratulate the mother before continuing with other post-delivery care.",
  rationalesIncorrect: {
    B: "Observation for placental separation should occur before delivery of the placenta, not after it has already been delivered.",
    C: "Uterotonic administration is usually part of active management of the third stage and is done earlier, usually soon after birth of the baby."
  }
},

{
  question: "Which episiotomy incision is preferred when major blood vessels and nerves are to be protected?",
  options: {
    A: "Mediolateral",
    B: "J-shaped",
    C: "Medial"
  },
  correctAnswer: "A",
  rationaleCorrect: "A mediolateral episiotomy is directed away from the midline and helps reduce the risk of extension into the anal sphincter and rectum. It is commonly preferred when protection from severe perineal injury is a concern.",
  rationalesIncorrect: {
    B: "A J-shaped incision is not the standard commonly preferred episiotomy incision in routine midwifery practice.",
    C: "A medial or midline episiotomy may heal well, but it has a higher risk of extending into the anal sphincter and rectum."
  }
},

{
  question: "During head-to-toe examination of a newborn, the midwife notices copious mucus and is unable to pass a nasogastric tube beyond 10–12 cm. What condition is most likely?",
  options: {
    A: "Rectal atresia",
    B: "Oesophageal atresia",
    C: "Imperforate anus"
  },
  correctAnswer: "B",
  rationaleCorrect: "Copious mucus and inability to pass a nasogastric tube into the stomach are classic signs of oesophageal atresia. The tube coils in the blind upper pouch.",
  rationalesIncorrect: {
    A: "Rectal atresia affects the lower gastrointestinal tract and would present with failure to pass meconium, not inability to pass a nasogastric tube.",
    C: "Imperforate anus is absence or abnormal opening of the anus. It does not explain copious mucus and inability to pass a nasogastric tube."
  }
},

{
  question: "At the lying-in ward, all the following can help keep a baby warm except:",
  options: {
    A: "Clothing the baby appropriately",
    B: "Bathing the baby immediately",
    C: "Changing all wet clothing"
  },
  correctAnswer: "B",
  rationaleCorrect: "Immediate bathing can cause heat loss and increase the risk of neonatal hypothermia. Bathing should be delayed until the baby is stable and warm.",
  rationalesIncorrect: {
    A: "Appropriate clothing helps prevent heat loss and keeps the baby warm.",
    C: "Wet clothing causes heat loss through evaporation, so changing it helps keep the baby warm."
  }
},

{
  question: "A 6-week-old baby has repeated projectile vomiting. Which condition is most likely?",
  options: {
    A: "Spina bifida occulta",
    B: "Pyloric stenosis",
    C: "Cystic fibrosis"
  },
  correctAnswer: "B",
  rationaleCorrect: "Pyloric stenosis commonly presents in early infancy with repeated projectile, non-bilious vomiting. It often becomes noticeable around 2–8 weeks of age.",
  rationalesIncorrect: {
    A: "Spina bifida occulta is a spinal defect and does not cause projectile vomiting.",
    C: "Cystic fibrosis may cause respiratory infections and digestive problems, but projectile vomiting in a 6-week-old baby is more suggestive of pyloric stenosis."
  }
},

{
  question: "A term infant is born pink and breathing normally after delivery. Which routine action is most appropriate?",
  options: {
    A: "Give rescue breaths using a bag and mask with 99% oxygen",
    B: "Dry the infant gently and discard the wet linen",
    C: "Start chest compressions at a rate of 60 compressions per minute"
  },
  correctAnswer: "B",
  rationaleCorrect: "The baby is term, pink, and breathing normally. Routine care includes drying the baby, removing wet linen, keeping the baby warm, and continuing observation.",
  rationalesIncorrect: {
    A: "Rescue breaths are needed if the baby is not breathing or has inadequate respiration. This baby is breathing normally.",
    C: "Chest compressions are not indicated because the baby is breathing and appears well."
  }
},

{
  question: "Classification of the newborn according to birth weight is mainly used to assess:",
  options: {
    A: "Fetal maturity",
    B: "Neonatal size",
    C: "Growth"
  },
  correctAnswer: "B",
  rationaleCorrect: "Birth weight classification is used to assess neonatal size, such as low birth weight, very low birth weight, normal birth weight, or macrosomia.",
  rationalesIncorrect: {
    A: "Fetal maturity is mainly assessed by gestational age, not weight alone.",
    C: "Growth assessment compares weight with gestational age, but direct classification by birth weight assesses neonatal size."
  }
},

{
  question: "Newborn babies are prone to haemorrhagic conditions mainly because:",
  options: {
    A: "Pregnant women do not store enough vitamin K for their babies",
    B: "Vitamin K cannot cross the placenta",
    C: "Vitamin K is poorly transferred across the placenta"
  },
  correctAnswer: "C",
  rationaleCorrect: "Newborns are at risk of bleeding because vitamin K transfer across the placenta is poor. They also have low vitamin K stores at birth, which is why vitamin K is given after delivery.",
  rationalesIncorrect: {
    A: "The problem is not simply that pregnant women lack vitamin K storage; the key issue is poor placental transfer to the foetus.",
    B: "This is too absolute. Some vitamin K transfer occurs, but it is poor."
  }
},

{
  question: "During phototherapy for neonatal jaundice, which two main organs or areas should be protected from damage?",
  options: {
    A: "Ovaries and eyes",
    B: "Kidneys and heart",
    C: "Lungs and skin"
  },
  correctAnswer: "A",
  rationaleCorrect: "During phototherapy, the baby's eyes should be protected from light exposure. The gonads may also be covered to reduce unnecessary exposure, especially in female babies where the ovaries are considered in this option.",
  rationalesIncorrect: {
    B: "The kidneys and heart are not the main organs requiring direct protection during phototherapy.",
    C: "The skin is exposed to phototherapy light for treatment, so it is not usually covered completely."
  }
},

{
  question: "A 2-day-old baby is born with the spinal cord exposed and no skin covering the defect. How is this condition best described?",
  options: {
    A: "Spina bifida occulta",
    B: "Spina bifida aperta",
    C: "Hydrocephalus"
  },
  correctAnswer: "B",
  rationaleCorrect: "Spina bifida aperta is an open neural tube defect where the spinal contents may be exposed or covered by a thin membrane. The absence of skin covering the defect makes it an open form.",
  rationalesIncorrect: {
    A: "Spina bifida occulta is hidden and usually covered by skin.",
    C: "Hydrocephalus is accumulation of cerebrospinal fluid in the brain ventricles, not an exposed spinal cord defect."
  }
},

{
  question: "A baby is delivered with a single palmar crease, flat occiput, small head, and generalised hypothermia. The mother should be educated about the baby's risk of which condition?",
  options: {
    A: "Hypoglycaemia",
    B: "Hypothermia",
    C: "Hypothyroidism"
  },
  correctAnswer: "C",
  rationaleCorrect: "A single palmar crease, flat occiput, and small head suggest Down syndrome. Babies with Down syndrome have an increased risk of thyroid problems, especially hypothyroidism, and should be monitored.",
  rationalesIncorrect: {
    A: "Hypoglycaemia can occur in some newborns, but the features given point more strongly towards Down syndrome and its association with hypothyroidism.",
    B: "The baby already has hypothermia, but the question asks about a condition the mother should be educated about as a risk. Hypothyroidism is the better answer."
  }
},

{
  question: "A baby has lethargy, poor muscle tone, a high-pitched cry, and serum bilirubin greater than 350 µmol/L. What is the likely diagnosis?",
  options: {
    A: "Intracranial injury",
    B: "Hypoglycaemia",
    C: "Kernicterus"
  },
  correctAnswer: "C",
  rationaleCorrect: "Very high bilirubin levels can cross into the brain and cause bilirubin encephalopathy, known as kernicterus. Features include lethargy, poor tone, abnormal cry, and neurological signs.",
  rationalesIncorrect: {
    A: "Intracranial injury may cause neurological symptoms, but the very high bilirubin level points specifically to kernicterus.",
    B: "Hypoglycaemia can cause lethargy and seizures, but it does not explain the very high bilirubin level."
  }
},

{
  question: "A newborn fails to establish spontaneous respiration, and aspiration neonatorum is suspected. What is the major cause of this condition?",
  options: {
    A: "Uterine contractions during labour",
    B: "Blockage of the trachea by blood and mucus",
    C: "Tight cord around the baby's neck"
  },
  correctAnswer: "B",
  rationaleCorrect: "Aspiration neonatorum occurs when the newborn's airway is obstructed by aspirated materials such as mucus, blood, liquor, or meconium. This prevents effective breathing after birth.",
  rationalesIncorrect: {
    A: "Normal uterine contractions during labour do not directly cause aspiration neonatorum.",
    C: "A tight cord around the neck may cause birth asphyxia, but aspiration neonatorum specifically involves airway blockage by aspirated material."
  }
},

{
  question: "A term baby was not properly dried after birth and became hypothermic. By which method did the baby mainly lose heat?",
  options: {
    A: "Radiation",
    B: "Conduction",
    C: "Evaporation"
  },
  correctAnswer: "C",
  rationaleCorrect: "If a newborn is not dried properly, heat is lost as moisture on the skin evaporates. This is one of the commonest causes of heat loss immediately after birth.",
  rationalesIncorrect: {
    A: "Radiation is heat loss from the baby to cooler surrounding objects not in direct contact.",
    B: "Conduction is heat loss through direct contact with a cold surface."
  }
},

{
  question: "A term baby is very oedematous, pale, and anaemic, and the placenta is very large with oozing fluid. What condition best describes the baby?",
  options: {
    A: "Kernicterus foetalis",
    B: "Haemolytic jaundice",
    C: "Hydrops foetalis"
  },
  correctAnswer: "C",
  rationaleCorrect: "Hydrops foetalis is characterised by severe generalised oedema of the foetus or newborn. It may be associated with pallor, anaemia, and a large oedematous placenta.",
  rationalesIncorrect: {
    A: "Kernicterus refers to bilirubin-induced brain damage, not generalised oedema and a large placenta.",
    B: "Haemolytic jaundice may contribute to anaemia and jaundice, but the full picture of oedema, pallor, anaemia, and a large placenta fits hydrops foetalis better."
  }
},

{
  question: "A baby diagnosed with meconium aspiration syndrome should be observed for which signs? I. Cyanosis. II. Barrel-shaped chest. III. Chest retractions. IV. Laboured respiration.",
  options: {
    A: "I, II and IV",
    B: "I, II and III",
    C: "I, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Meconium aspiration syndrome commonly presents with respiratory distress. Important signs include cyanosis, chest retractions, and laboured respiration.",
  rationalesIncorrect: {
    A: "Cyanosis and laboured respiration are correct, but this option omits chest retractions, which are a key sign of respiratory distress.",
    B: "Cyanosis and chest retractions are correct, but this option omits laboured respiration, another important sign."
  }
},

{
  question: "Which of the following is a possible complication of phototherapy?",
  options: {
    A: "Necrotising enterocolitis",
    B: "Retrolental fibroplasia",
    C: "DNA damage"
  },
  correctAnswer: "C",
  rationaleCorrect: "Phototherapy uses light energy to break down bilirubin. Excessive or poorly controlled exposure has been associated with possible cellular effects, including DNA-related concerns, which is why safe phototherapy practice and protection of sensitive areas are important.",
  rationalesIncorrect: {
    A: "Necrotising enterocolitis is a serious intestinal condition mostly associated with prematurity and gut injury, not a common direct complication of phototherapy.",
    B: "Retrolental fibroplasia is associated with excessive oxygen therapy in premature babies, not phototherapy."
  }
},

{
  question: "A 4-week-old baby has feeding problems, repeated vomiting after feeds, irritability, tachycardia, and fast breathing. What should a newly qualified midwife do first?",
  options: {
    A: "Give oral rehydration solution",
    B: "Counsel the mother and refer",
    C: "Encourage the mother to breastfeed"
  },
  correctAnswer: "B",
  rationaleCorrect: "A 4-week-old baby with repeated vomiting, irritability, tachycardia, and fast breathing needs urgent medical evaluation. The midwife should counsel the mother and refer the baby for assessment and treatment.",
  rationalesIncorrect: {
    A: "Oral rehydration solution may help dehydration, but it does not treat the underlying cause of persistent vomiting and respiratory distress.",
    C: "Breastfeeding is important, but repeated vomiting and abnormal vital signs require referral."
  }
},

{
  question: "A newborn has an absent heart rate, no respiratory effort, some flexion of limbs, minimal grimace, and bluish skin colour at 1 minute. What is the APGAR score?",
  options: {
    A: "2/10",
    B: "4/10",
    C: "6/10"
  },
  correctAnswer: "A",
  rationaleCorrect: "The APGAR score is calculated as follows: heart rate absent = 0, respiration absent = 0, some flexion = 1, minimal grimace = 1, and blue colour = 0. The total score is 2/10.",
  rationalesIncorrect: {
    B: "A score of 4/10 would require more positive findings than those described.",
    C: "A score of 6/10 would suggest moderate adaptation, but this baby has absent heart rate and no breathing effort."
  }
},

{
  question: "A baby has a petechial rash and prolonged bleeding from puncture sites. This condition usually results from:",
  options: {
    A: "Prolonged labour",
    B: "Forceps delivery",
    C: "Thrombocytopenia"
  },
  correctAnswer: "C",
  rationaleCorrect: "Petechiae and prolonged bleeding from puncture sites suggest a low platelet count. Platelets are needed for normal clot formation, so thrombocytopenia can cause bleeding tendencies.",
  rationalesIncorrect: {
    A: "Prolonged labour may stress the baby but does not directly explain petechiae and prolonged bleeding.",
    B: "Forceps delivery may cause bruising or trauma, but generalised petechiae and bleeding from puncture sites point more to thrombocytopenia."
  }
},

{
  question: "A premature baby has less body fat. What should the mother be encouraged to do to prevent hypothermia?",
  options: {
    A: "Ensure adequate breastfeeding",
    B: "Kangaroo care",
    C: "Keep the room warm"
  },
  correctAnswer: "B",
  rationaleCorrect: "Kangaroo mother care provides skin-to-skin contact, which helps maintain the baby's temperature. It is especially useful for premature and low-birth-weight babies who have little body fat.",
  rationalesIncorrect: {
    A: "Feeding supports growth and energy, but kangaroo care is more direct for preventing hypothermia.",
    C: "A warm room helps, but kangaroo care is more effective and practical for maintaining temperature in premature babies."
  }
},

{
  question: "An 8-day-old baby is brought with paleness, weakness, and bleeding from the umbilical cord. Which condition is most likely?",
  options: {
    A: "Haemorrhagic disease of the newborn",
    B: "Haemolytic disease of the newborn",
    C: "Hyperbilirubinaemia"
  },
  correctAnswer: "A",
  rationaleCorrect: "Bleeding from the umbilical cord around the first week of life suggests vitamin K deficiency bleeding, also known as haemorrhagic disease of the newborn.",
  rationalesIncorrect: {
    B: "Haemolytic disease of the newborn mainly causes anaemia and jaundice due to red blood cell destruction, not bleeding from the umbilical stump.",
    C: "Hyperbilirubinaemia causes jaundice, not umbilical bleeding."
  }
},

{
  question: "A baby has a monosomal condition with widely spaced nipples, underdeveloped genitalia, and a short webbed neck. What is the most likely diagnosis?",
  options: {
    A: "Turner's syndrome",
    B: "Klinefelter's syndrome",
    C: "Edwards syndrome"
  },
  correctAnswer: "A",
  rationaleCorrect: "Turner syndrome is a monosomal condition, usually 45,X. Classic features include short webbed neck, widely spaced nipples, and underdeveloped reproductive organs.",
  rationalesIncorrect: {
    B: "Klinefelter syndrome is usually 47,XXY and occurs in males. It is not monosomy.",
    C: "Edwards syndrome is trisomy 18, not a monosomal condition."
  }
},

{
  question: "A term baby weighs 1.5 kg at birth. How would this baby be classified by birth weight?",
  options: {
    A: "Low birth weight",
    B: "Extremely low birth weight",
    C: "Very low birth weight"
  },
  correctAnswer: "C",
  rationaleCorrect: "In many nursing and midwifery exam contexts, a baby weighing around 1.5 kg is classified as very low birth weight. Although the baby is term, the weight is far below normal and requires careful assessment and referral.",
  rationalesIncorrect: {
    A: "Low birth weight refers broadly to babies weighing less than 2.5 kg, but 1.5 kg is a more severe category in this exam context.",
    B: "Extremely low birth weight usually refers to babies weighing less than 1.0 kg."
  }
},

{
  question: "What is the most common complication of circumcision that parents should be taught to observe for?",
  options: {
    A: "Injury to the glans penis",
    B: "Removal of excessive skin",
    C: "Bleeding"
  },
  correctAnswer: "C",
  rationaleCorrect: "Bleeding is the most common complication after circumcision. Parents should be taught to observe the circumcision site and report persistent or excessive bleeding.",
  rationalesIncorrect: {
    A: "Injury to the glans penis is a possible but less common and more serious complication.",
    B: "Removal of excessive skin may occur if the procedure is poorly done, but it is not the most common complication."
  }
},

{
  question: "In fetal circulation, blood from the pulmonary artery flows to the descending aorta through the:",
  options: {
    A: "Ductus arteriosus",
    B: "Ductus venosus",
    C: "Foramen ovale"
  },
  correctAnswer: "A",
  rationaleCorrect: "The ductus arteriosus connects the pulmonary artery to the descending aorta in fetal circulation. It allows most blood to bypass the fetal lungs, which are not yet functioning for gas exchange.",
  rationalesIncorrect: {
    B: "The ductus venosus carries oxygenated blood from the umbilical vein to the inferior vena cava, bypassing the liver.",
    C: "The foramen ovale allows blood to pass from the right atrium to the left atrium, not from the pulmonary artery to the descending aorta."
  }
},

{
  question: "Causes of facial nerve compression in the newborn include the following except compression by:",
  options: {
    A: "Malrotation of the fetal head",
    B: "Maternal sacral promontory",
    C: "Misapplied forceps blade"
  },
  correctAnswer: "A",
  rationaleCorrect: "Facial nerve palsy in the newborn is commonly related to direct compression of the facial nerve during labour or by forceps. Malrotation of the fetal head is not a direct cause of facial nerve compression.",
  rationalesIncorrect: {
    B: "Pressure from the maternal pelvis, including the sacral promontory, may compress the fetal facial nerve.",
    C: "Incorrect forceps application can directly compress or injure the facial nerve."
  }
},
{
  question: "Which congenital factors and conditions may contribute to polyhydramnios? I. Anencephaly. II. Oesophageal atresia. III. Renal agenesis.",
  options: {
    A: "I and II",
    B: "II and III",
    C: "I, II and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "Polyhydramnios may occur when the foetus cannot swallow or absorb amniotic fluid properly. Anencephaly and oesophageal atresia can interfere with fetal swallowing, leading to excess amniotic fluid.",
  rationalesIncorrect: {
    B: "Oesophageal atresia is correct, but renal agenesis is usually associated with reduced urine production and oligohydramnios, not polyhydramnios.",
    C: "This is incorrect because renal agenesis does not usually contribute to polyhydramnios."
  }
},

{
  question: "A 2-week puerperal mother reports that her baby has white-grey patches on the tongue that cannot be removed. What are these patches most likely called?",
  options: {
    A: "Oral candidiasis",
    B: "Toxoplasma gondii",
    C: "Cutaneous candidiasis"
  },
  correctAnswer: "A",
  rationaleCorrect: "White or greyish patches on the tongue or inside the mouth that cannot easily be wiped away are suggestive of oral candidiasis, also called oral thrush. It is caused by Candida infection.",
  rationalesIncorrect: {
    B: "Toxoplasma gondii is a parasite and does not usually present as white patches on the baby's tongue.",
    C: "Cutaneous candidiasis affects the skin, not the oral cavity."
  }
},

{
  question: "A 34-week preterm baby has repetitive jerking of the limbs during sleep. The baby is otherwise well, and the jerking stops when the limbs are held. What is the most likely cause?",
  options: {
    A: "Cytomegalovirus",
    B: "Hypocalcaemia",
    C: "Neonatal myoclonus"
  },
  correctAnswer: "C",
  rationaleCorrect: "Neonatal myoclonus can present as jerking movements, especially during sleep. A key clue is that the baby is otherwise well and the jerking stops when the limbs are gently held.",
  rationalesIncorrect: {
    A: "Congenital cytomegalovirus is usually associated with features such as growth restriction, jaundice, hepatosplenomegaly, petechiae, or neurological abnormalities.",
    B: "Hypocalcaemia can cause jitteriness or seizures, but the baby is otherwise well and the movements stop with restraint, which supports neonatal myoclonus."
  }
},

{
  question: "A premature baby has a central cleft palate, easily chokes during feeding, and the tongue falls back to occlude the airway. Which condition best describes this presentation?",
  options: {
    A: "Pierre Robin syndrome",
    B: "Meconium ileus",
    C: "Pyloric stenosis"
  },
  correctAnswer: "A",
  rationaleCorrect: "Pierre Robin syndrome is commonly associated with cleft palate, backward displacement of the tongue, and airway obstruction. These features explain the choking during feeding and the tongue falling back to block the airway.",
  rationalesIncorrect: {
    B: "Meconium ileus causes intestinal obstruction in the newborn and is commonly associated with cystic fibrosis. It does not explain cleft palate and airway obstruction.",
    C: "Pyloric stenosis causes projectile vomiting, usually around 2–8 weeks of age, not tongue obstruction and cleft palate."
  }
},

{
  question: "A 55-year-old woman complains of changes in the length of her menstrual cycle. Which phase is most likely responsible for variation in cycle length?",
  options: {
    A: "Ovulation",
    B: "Regenerative phase",
    C: "Secretory phase"
  },
  correctAnswer: "B",
  rationaleCorrect: "The length of the menstrual cycle is mostly affected by changes in the first half of the cycle, especially the regenerative or proliferative phase. The secretory phase is usually more constant, lasting about 14 days.",
  rationalesIncorrect: {
    A: "Ovulation is an event in the cycle, not the phase most responsible for variation in cycle length.",
    C: "The secretory phase is usually relatively fixed in duration and is less responsible for changes in menstrual cycle length."
  }
},

{
  question: "During antenatal examination, a wider space between the two lateral sacral dimples suggests which type of pelvis?",
  options: {
    A: "Gynaecoid pelvis",
    B: "Android pelvis",
    C: "Platypelloid pelvis"
  },
  correctAnswer: "A",
  rationaleCorrect: "A wider space between the lateral sacral dimples suggests a broader and more favourable pelvic shape. The gynaecoid pelvis is the most favourable type for vaginal delivery.",
  rationalesIncorrect: {
    B: "An android pelvis is narrower and heart-shaped, making labour more difficult.",
    C: "A platypelloid pelvis is flat with a shortened anteroposterior diameter and is not the best answer here."
  }
},

{
  question: "The ovaries originate from the same embryonic structure as the:",
  options: {
    A: "Suprarenal gland and male testes",
    B: "Uterus and fallopian tubes",
    C: "Bladder and uterus"
  },
  correctAnswer: "A",
  rationaleCorrect: "The ovaries and testes develop from the embryonic gonadal ridge. The adrenal cortex is also closely related embryologically to the urogenital ridge region.",
  rationalesIncorrect: {
    B: "The uterus and fallopian tubes develop mainly from the paramesonephric ducts, not from the same embryonic structure as the ovaries.",
    C: "The bladder and uterus have different embryological origins from the ovaries."
  }
},

{
  question: "Which of the following structures fall under the superficial pelvic floor muscle layer? I. Bulbocavernosus. II. Iliococcygeus. III. Perineal body. IV. Sphincter ani externus.",
  options: {
    A: "I, III and IV",
    B: "II, III and IV",
    C: "I, II and III"
  },
  correctAnswer: "A",
  rationaleCorrect: "Bulbocavernosus and the external anal sphincter are superficial perineal structures. The perineal body is also part of the superficial perineal support area.",
  rationalesIncorrect: {
    B: "This includes iliococcygeus, which belongs to the deeper pelvic floor, not the superficial layer.",
    C: "This also includes iliococcygeus, which is part of the deep pelvic floor rather than the superficial layer."
  }
},

{
  question: "During which phase of the menstrual cycle is pregnancy less likely to occur?",
  options: {
    A: "Ovulation phase",
    B: "Secretory phase",
    C: "Regenerative phase"
  },
  correctAnswer: "B",
  rationaleCorrect: "Pregnancy is less likely during the secretory phase because ovulation has already occurred and the ovum survives for only a short time after release. Fertility is highest around ovulation.",
  rationalesIncorrect: {
    A: "The ovulation phase is the most fertile period of the menstrual cycle, so pregnancy is more likely.",
    C: "The regenerative phase occurs before ovulation. As ovulation approaches, fertility increases."
  }
},

{
  question: "Weak perineal floor muscles in a multigravida are most likely to account for:",
  options: {
    A: "Hiatus hernia",
    B: "Uterine prolapse",
    C: "Cervical polyps"
  },
  correctAnswer: "B",
  rationaleCorrect: "Weak pelvic floor muscles, especially after multiple pregnancies and deliveries, can reduce support for the uterus and pelvic organs. This can lead to uterine prolapse.",
  rationalesIncorrect: {
    A: "Hiatus hernia involves the stomach protruding through the diaphragm, not weakness of the pelvic floor.",
    C: "Cervical polyps are localised growths from the cervix and are not caused by weak perineal floor muscles."
  }
},

{
  question: "Which newborn finding should be considered a cause for concern?",
  options: {
    A: "A 48-hour-old term female infant passing green-brown seedy stools",
    B: "A 24-hour-old term male infant passing black tarry stools",
    C: "A 60-hour-old term male infant who has not passed any stools"
  },
  correctAnswer: "C",
  rationaleCorrect: "A term newborn should usually pass meconium within the first 24–48 hours of life. Failure to pass stool by 60 hours is concerning and may suggest intestinal obstruction, Hirschsprung disease, or anorectal malformation.",
  rationalesIncorrect: {
    A: "Green-brown seedy stools at 48 hours can be normal transitional stool.",
    B: "Black tarry stool in the first day is usually meconium and is normal."
  }
},

{
  question: "Mittelschmerz, or lower abdominal pain during ovulation, results from: I. Rupture of the Graafian follicle. II. Leakage of follicular fluid into the peritoneal cavity. III. Increased peristaltic action of the ovarian tubes. IV. Increase in size of the corpus luteum.",
  options: {
    A: "I, II and III",
    B: "I and II",
    C: "II, III and IV"
  },
  correctAnswer: "B",
  rationaleCorrect: "Mittelschmerz is ovulation pain. It is thought to result from rupture of the Graafian follicle and irritation of the peritoneum by follicular fluid or a small amount of blood.",
  rationalesIncorrect: {
    A: "Rupture of the Graafian follicle and leakage of follicular fluid are correct, but increased peristaltic action of the ovarian tubes is not the main explanation for Mittelschmerz.",
    C: "This excludes rupture of the Graafian follicle, which is a key cause of Mittelschmerz."
  }
},

{
  question: "During micturition, the sequence begins when the ______ muscle contracts and the ______ muscles relax.",
  options: {
    A: "Detrusor, pubococcygeus",
    B: "Pubococcygeus, detrusor",
    C: "Detrusor, merciers"
  },
  correctAnswer: "A",
  rationaleCorrect: "During micturition, the detrusor muscle of the bladder contracts while the pelvic floor and sphincter muscles relax. This allows urine to pass out.",
  rationalesIncorrect: {
    B: "This reverses the normal process. The bladder muscle contracts, not the pubococcygeus.",
    C: "Merciers is not the correct muscle group involved in normal micturition."
  }
},

{
  question: "A baby has total brachial plexus injury. This means there is paralysis of the shoulder, arm, and:",
  options: {
    A: "Hand",
    B: "Foot",
    C: "Wrist"
  },
  correctAnswer: "A",
  rationaleCorrect: "Total brachial plexus injury can affect the entire upper limb, including the shoulder, arm, forearm, and hand. The hand may be weak or paralysed depending on the severity.",
  rationalesIncorrect: {
    B: "The foot is supplied by nerves from the lower limb plexuses, not the brachial plexus.",
    C: "Wrist involvement may occur, but hand better completes the description of total upper limb involvement."
  }
},

{
  question: "During the latter half of pregnancy, the uterus grows bigger mainly through which type of expansion?",
  options: {
    A: "Transverse",
    B: "Mechanical",
    C: "Tissue"
  },
  correctAnswer: "B",
  rationaleCorrect: "In the latter half of pregnancy, uterine enlargement occurs mainly due to mechanical stretching by the growing foetus, placenta, and amniotic fluid.",
  rationalesIncorrect: {
    A: "Transverse does not describe the process by which the uterus enlarges.",
    C: "Tissue growth contributes more in early pregnancy through hypertrophy and hyperplasia, but later enlargement is mainly due to mechanical stretching."
  }
},

{
  question: "Which effect may occur in a newborn during phototherapy if monitoring is poor?",
  options: {
    A: "Galactosaemia",
    B: "Kernicterus",
    C: "Hyperthermia"
  },
  correctAnswer: "C",
  rationaleCorrect: "Phototherapy can increase the baby's temperature if the baby is not monitored properly. Temperature should therefore be checked regularly during phototherapy.",
  rationalesIncorrect: {
    A: "Galactosaemia is an inherited metabolic disorder and is not caused by phototherapy.",
    B: "Phototherapy is used to prevent severe hyperbilirubinaemia from progressing to kernicterus; it does not cause kernicterus."
  }
},

{
  question: "A baby diagnosed with hypoglycaemia is convulsing and lethargic. Which other signs are commonly associated with neonatal hypoglycaemia?",
  options: {
    A: "Poor feeding and jitteriness",
    B: "Poor feeding and vomiting",
    C: "Jitteriness and unconsciousness"
  },
  correctAnswer: "A",
  rationaleCorrect: "Neonatal hypoglycaemia commonly presents with poor feeding, jitteriness, lethargy, abnormal cry, seizures, apnoea, or temperature instability. Poor feeding and jitteriness are classic early signs.",
  rationalesIncorrect: {
    B: "Poor feeding can occur, but vomiting is less specific for hypoglycaemia.",
    C: "Jitteriness is correct, but unconsciousness suggests severe deterioration rather than the common early signs being asked."
  }
},

{
  question: "When the total amount of amniotic fluid exceeds 1500 mL, the condition is known as:",
  options: {
    A: "Polyhydramnios",
    B: "Excess hydramnios",
    C: "Oligohydramnios"
  },
  correctAnswer: "A",
  rationaleCorrect: "Polyhydramnios means excessive amniotic fluid. In many midwifery texts, amniotic fluid above about 1500–2000 mL is described as polyhydramnios.",
  rationalesIncorrect: {
    B: "Excess hydramnios describes the idea generally, but the correct medical term is polyhydramnios.",
    C: "Oligohydramnios means reduced amniotic fluid, not excess."
  }
},

{
  question: "Engagement in a cephalic vertex presentation occurs when which diameter has passed through the pelvic brim?",
  options: {
    A: "Bitemporal",
    B: "Occipital",
    C: "Biparietal"
  },
  correctAnswer: "C",
  rationaleCorrect: "In a cephalic vertex presentation, engagement occurs when the biparietal diameter, which is the widest transverse diameter of the fetal head, passes through the pelvic inlet.",
  rationalesIncorrect: {
    A: "The bitemporal diameter is smaller than the biparietal diameter and is not the key diameter used to define engagement.",
    B: "Occipital refers to the back part of the fetal head, not the transverse diameter used to define engagement."
  }
},

{
  question: "Female genital cutting may involve which structures? I. Labia minora. II. Prepuce. III. Clitoris. IV. Labia majora.",
  options: {
    A: "I and IV",
    B: "I and III",
    C: "I and II"
  },
  correctAnswer: "B",
  rationaleCorrect: "Female genital cutting commonly involves injury or removal of the clitoris and may involve the labia minora. The exact structures affected depend on the type of cutting performed.",
  rationalesIncorrect: {
    A: "The labia minora may be involved, but the clitoris is a key structure commonly involved and is missing from this option.",
    C: "The prepuce may be involved in some forms, but the clitoris is the more central structure in this exam context."
  }
},

{
  question: "Why is anti-D immunoglobulin given to a Rhesus-negative mother after delivery when indicated?",
  options: {
    A: "Prevents Rhesus isoimmunisation",
    B: "Destroys any fetal cells in the mother's blood",
    C: "Helps the newborn to survive"
  },
  correctAnswer: "A",
  rationaleCorrect: "Anti-D immunoglobulin prevents the Rh-negative mother from becoming sensitised to Rh-positive fetal red blood cells. This reduces the risk of haemolytic disease in future pregnancies.",
  rationalesIncorrect: {
    B: "This partly explains how anti-D works, but the best overall reason is prevention of Rhesus isoimmunisation.",
    C: "Anti-D is mainly given to protect future pregnancies by preventing maternal sensitisation, not to directly treat the current newborn."
  }
},

{
  question: "Heat loss in a baby caused by cool air passing over the surface of the body is best defined as:",
  options: {
    A: "Evaporation",
    B: "Conduction",
    C: "Convection"
  },
  correctAnswer: "C",
  rationaleCorrect: "Convection is heat loss when moving air carries heat away from the baby's body surface. This can happen when a baby is exposed to draughts or cool air.",
  rationalesIncorrect: {
    A: "Evaporation occurs when moisture on the baby's skin changes to vapour and removes heat.",
    B: "Conduction occurs when the baby loses heat through direct contact with a cold surface."
  }
},

{
  question: "Which of the following conditions contribute to polyhydramnios? I. Multiple pregnancy. II. Open neural tube defect. III. Maternal diabetes. IV. Rhesus isoimmunisation.",
  options: {
    A: "I, III and IV",
    B: "II, III and IV",
    C: "I, II and IV"
  },
  correctAnswer: "B",
  rationaleCorrect: "Polyhydramnios can occur with fetal anomalies such as open neural tube defects, maternal diabetes, and fetal anaemia or hydrops from Rhesus isoimmunisation. These conditions can increase amniotic fluid volume or interfere with normal fluid balance.",
  rationalesIncorrect: {
    A: "Maternal diabetes and Rhesus isoimmunisation are correct, but this option excludes open neural tube defect, which is an important cause.",
    C: "Open neural tube defect and Rhesus isoimmunisation are correct, but maternal diabetes is also a major cause and is excluded here."
  }
},

{
  question: "Immediately after removal of the placenta, which action is the odd one out during quick placental assessment?",
  options: {
    A: "Remove clots to make maternal lobes visible",
    B: "Look for completeness, calcifications, or infarcts",
    C: "Examine the number of vessels in the umbilical cord"
  },
  correctAnswer: "C",
  rationaleCorrect: "Immediately after placental delivery, the quick assessment focuses on whether the placenta and membranes are complete and whether there are obvious abnormalities. Counting umbilical cord vessels is important but is not usually the first quick assessment action immediately after removal.",
  rationalesIncorrect: {
    A: "Removing clots to make the maternal lobes visible helps assess whether any cotyledon is missing.",
    B: "Looking for completeness, calcifications, or infarcts is part of placental inspection."
  }
},

{
  question: "By which week of embryonic development does sex differentiation occur?",
  options: {
    A: "12 weeks",
    B: "4 weeks",
    C: "8 weeks"
  },
  correctAnswer: "C",
  rationaleCorrect: "Sex differentiation begins in early embryonic life, and by around 8 weeks, differentiation of internal and external reproductive structures is underway.",
  rationalesIncorrect: {
    A: "By 12 weeks, external genitalia may be more clearly differentiated, but the process begins earlier.",
    B: "At 4 weeks, the embryo is still at an early indifferent stage and sex differentiation has not clearly occurred."
  }
},

{
  question: "During breastfeeding education, a mother asks about the source of milk. The most specific answer is that milk comes from the:",
  options: {
    A: "Acini cells",
    B: "Mammary glands",
    C: "Myoepithelial cells"
  },
  correctAnswer: "A",
  rationaleCorrect: "Milk is produced by the secretory cells of the alveoli or acini of the breast. The milk then passes through the ducts towards the nipple.",
  rationalesIncorrect: {
    B: "Mammary glands are the general organs that produce milk, but acini cells are the more specific source.",
    C: "Myoepithelial cells contract to help eject milk, but they do not produce the milk."
  }
},

{
  question: "Why does suckling at the breast help when lactation has not yet been established?",
  options: {
    A: "Suckling at the breast satisfies both baby and mother",
    B: "When baby does not suckle, ovulation occurs early",
    C: "Suckling at the breast causes prolactin to be released"
  },
  correctAnswer: "C",
  rationaleCorrect: "Suckling stimulates nerve impulses from the nipple to the brain, causing prolactin release from the anterior pituitary gland. Prolactin stimulates milk production.",
  rationalesIncorrect: {
    A: "This may be emotionally true, but it does not explain the physiology of lactation.",
    B: "Breastfeeding can delay ovulation, but this does not answer why suckling is important for milk production."
  }
},

{
  question: "In immediate newborn care, the midwife should protect the baby from which of the following? I. Airway obstruction. II. Hypothermia. III. Congenital abnormalities. IV. Radiation and accidents.",
  options: {
    A: "I, II and III",
    B: "I and II",
    C: "I, III and IV"
  },
  correctAnswer: "B",
  rationaleCorrect: "Immediate newborn care focuses strongly on preventing airway obstruction and hypothermia. These are urgent preventable threats after birth.",
  rationalesIncorrect: {
    A: "Airway obstruction and hypothermia are correct, but congenital abnormalities are already present and cannot be prevented after birth.",
    C: "Airway obstruction is correct, but congenital abnormalities cannot be prevented after birth, and radiation is not a routine immediate neonatal care concern in this context."
  }
},
{
  question: "During examination of newborn reflexes, the baby is held prone and suspended over the examiner's arm. The baby momentarily holds the head level with the body and flexes the limbs. Which reflex or test is being assessed?",
  options: {
    A: "Tonic neck reflex",
    B: "Ventral suspension",
    C: "Rooting reflex"
  },
  correctAnswer: "B",
  rationaleCorrect: "Ventral suspension is assessed by holding the baby prone while supporting the abdomen. A normal newborn briefly keeps the head in line with the body and flexes the limbs.",
  rationalesIncorrect: {
    A: "The tonic neck reflex is seen when the baby's head is turned to one side, causing extension of the limbs on the face side and flexion on the opposite side.",
    C: "The rooting reflex occurs when the baby turns the head towards a touched cheek or mouth area in search of the nipple."
  }
},

{
  question: "In labour, uterine contractions commence in which part of the uterus?",
  options: {
    A: "Fundus",
    B: "Body",
    C: "Cornua"
  },
  correctAnswer: "C",
  rationaleCorrect: "Uterine contractions begin from pacemaker areas near the uterine cornua in the upper uterus and spread downward. This produces fundal dominance, helping to push the foetus towards the cervix.",
  rationalesIncorrect: {
    A: "The fundus is the dominant contracting part of the uterus, but the more specific point of origin is near the cornua.",
    B: "The body of the uterus contracts, but contractions do not primarily commence there."
  }
},

{
  question: "In midwifery, the pelvis is considered clinically adequate when:",
  options: {
    A: "The presenting part is more than halfway through the pelvic cavity",
    B: "The woman has a broad sacral area",
    C: "The widest part of the fetal head has entered the pelvic brim"
  },
  correctAnswer: "C",
  rationaleCorrect: "A pelvis is considered clinically adequate when the widest presenting diameter of the fetal head is able to pass through the pelvic brim, indicating engagement.",
  rationalesIncorrect: {
    A: "Descent into the pelvic cavity is useful, but pelvic adequacy is first shown by successful passage through the pelvic brim.",
    B: "A broad sacral area may suggest a favourable pelvis, but it does not alone confirm pelvic adequacy."
  }
},

{
  question: "Which measure is most important in preventing infection in midwifery practice?",
  options: {
    A: "Checking vital signs regularly",
    B: "Universal precautions",
    C: "Antibiotic cones"
  },
  correctAnswer: "B",
  rationaleCorrect: "Universal precautions reduce transmission of infection by assuming that all blood and body fluids may be infectious. This includes hand hygiene, use of gloves, safe disposal of sharps, and aseptic technique.",
  rationalesIncorrect: {
    A: "Checking vital signs helps detect illness or infection, but it does not directly prevent infection.",
    C: "Antibiotics should not be used routinely to prevent infection unless clearly indicated."
  }
},

{
  question: "In a pregnant woman with polyhydramnios, which of the following is least likely to occur during labour?",
  options: {
    A: "Cord prolapse",
    B: "Postpartum haemorrhage",
    C: "Unstable lie"
  },
  correctAnswer: "B",
  rationaleCorrect: "Cord prolapse and unstable lie can occur during labour because excessive amniotic fluid prevents stable engagement of the presenting part. Postpartum haemorrhage is a complication after delivery, not strictly during labour.",
  rationalesIncorrect: {
    A: "Polyhydramnios increases the risk of cord prolapse, especially after rupture of membranes.",
    C: "Excess amniotic fluid allows the foetus to move freely, increasing the risk of unstable lie."
  }
},

{
  question: "Which test is used during newborn examination to detect congenital hip dysplasia?",
  options: {
    A: "Pavlik test",
    B: "Barlow's test",
    C: "Potter's test"
  },
  correctAnswer: "B",
  rationaleCorrect: "Barlow's test is used during newborn examination to detect hip instability or developmental dysplasia of the hip. The Barlow and Ortolani manoeuvres are standard clinical screening tests for neonatal hip dysplasia.",
  rationalesIncorrect: {
    A: "Pavlik is associated with the Pavlik harness, which is used in treatment, not as the main screening test.",
    C: "Potter's test is not the standard test for congenital hip dysplasia."
  }
},

{
  question: "Which of the following is not a function of oestrogen?",
  options: {
    A: "It causes the development of secondary sex characteristics",
    B: "It causes an increase in body temperature during ovulation",
    C: "It promotes regeneration of the endometrium after menstruation"
  },
  correctAnswer: "B",
  rationaleCorrect: "The rise in basal body temperature after ovulation is mainly due to progesterone, not oestrogen. Oestrogen is mainly responsible for development of female secondary sexual characteristics and regeneration of the endometrium.",
  rationalesIncorrect: {
    A: "Development of secondary sex characteristics is a true function of oestrogen.",
    C: "Regeneration or proliferation of the endometrium after menstruation is a true function of oestrogen."
  }
},

{
  question: "In women with chronic hypertension during pregnancy, antihypertensive medications primarily seek to reduce:",
  options: {
    A: "Fetal intrauterine growth restriction",
    B: "Maternal cardiovascular risk",
    C: "Placental abruption"
  },
  correctAnswer: "B",
  rationaleCorrect: "Antihypertensive medication in pregnancy primarily protects the mother from complications of severe hypertension, including stroke and cardiovascular complications. The main goal is maternal blood pressure control.",
  rationalesIncorrect: {
    A: "Hypertension can be associated with fetal growth restriction, but antihypertensive drugs are mainly given to control maternal blood pressure and reduce maternal risk.",
    C: "Chronic hypertension increases the risk of placental abruption, but the primary reason for medication is maternal blood pressure control."
  }
},

{
  question: "A baby presents with moist papular or vesicular skin rash in the axillae, neck, perineum, and umbilical region. How would this rash be explained to the mother?",
  options: {
    A: "Cutaneous candidiasis",
    B: "Pseudomembranous candidiasis",
    C: "Chlamydia infection"
  },
  correctAnswer: "A",
  rationaleCorrect: "Cutaneous candidiasis affects moist skin folds such as the neck, axillae, groin, perineum, and umbilical area. It may appear as a red, moist papular or vesicular rash.",
  rationalesIncorrect: {
    B: "Pseudomembranous candidiasis refers to oral thrush, which presents with white patches in the mouth.",
    C: "Chlamydia infection in newborns commonly presents with conjunctivitis or pneumonia, not moist skin-fold rashes."
  }
},

{
  question: "When which male reproductive organ is destroyed, sperm production is reduced?",
  options: {
    A: "Testes",
    B: "Vas deferens",
    C: "Seminal vesicles"
  },
  correctAnswer: "A",
  rationaleCorrect: "The testes are responsible for sperm production. Damage to the testes can therefore reduce or stop sperm production.",
  rationalesIncorrect: {
    B: "The vas deferens transports sperm from the epididymis but does not produce sperm.",
    C: "The seminal vesicles produce seminal fluid, but they do not produce sperm cells."
  }
},

{
  question: "Increased frequency of micturition during labour is most commonly associated with:",
  options: {
    A: "Breech presentation",
    B: "Brow presentation",
    C: "Occipito-posterior position"
  },
  correctAnswer: "C",
  rationaleCorrect: "Occipito-posterior position can cause pressure against the sacrum and bladder region, leading to backache, slow labour, and increased frequency of micturition.",
  rationalesIncorrect: {
    A: "Breech presentation is associated with the buttocks or feet presenting first, but frequency of micturition is not the classic feature.",
    B: "Brow presentation affects engagement and labour progress, but it is not the most common association with frequent micturition."
  }
},

{
  question: "In-vitro fertilisation in patients with primary ovarian failure due to Turner's syndrome is not recommended because of the risk of which complication during pregnancy?",
  options: {
    A: "Aortic rupture",
    B: "Bowel rupture",
    C: "Uterine rupture"
  },
  correctAnswer: "A",
  rationaleCorrect: "Turner syndrome is associated with cardiovascular abnormalities, and pregnancy can increase the risk of aortic dissection or rupture. Assisted reproduction requires careful cardiovascular evaluation and may be contraindicated in high-risk patients.",
  rationalesIncorrect: {
    B: "Bowel rupture is not the major pregnancy risk associated with Turner syndrome.",
    C: "Uterine rupture is more associated with uterine scars or obstructed labour, not Turner syndrome."
  }
},

{
  question: "A 35-year-old breastfeeding mother wants to know the earliest time she can start combined oral contraceptive pills postpartum from the options listed. Which is the best answer?",
  options: {
    A: "2 days",
    B: "7 days",
    C: "21 days"
  },
  correctAnswer: "C",
  rationaleCorrect: "Among the options, 21 days is the best answer because combined hormonal contraceptives should not be used before 21 days postpartum due to increased thromboembolism risk. For breastfeeding mothers, many guidelines are more cautious and may recommend delaying combined hormonal methods further depending on breastfeeding status and risk factors.",
  rationalesIncorrect: {
    A: "Two days postpartum is too early because the risk of blood clots is high, and combined hormonal contraceptives are contraindicated before 21 days postpartum.",
    B: "Seven days postpartum is also too early for combined oral contraceptives."
  }
},

{
  question: "Klinefelter syndrome is an XXY abnormality that affects boys. At what stage is it normally diagnosed?",
  options: {
    A: "At puberty",
    B: "At birth",
    C: "In utero"
  },
  correctAnswer: "A",
  rationaleCorrect: "Klinefelter syndrome is often recognised at puberty when features such as small testes, delayed or incomplete puberty, tall stature, reduced facial hair, or infertility become more obvious.",
  rationalesIncorrect: {
    B: "Many boys with Klinefelter syndrome appear normal at birth, so it is often missed.",
    C: "It can be detected prenatally through genetic testing, but this is not when it is normally diagnosed in many cases."
  }
},

{
  question: "How would Klumpke's palsy be identified? I. Paralysis of the shoulder and arm. II. Wrist and hands are paralysed. III. Wrist drop and no grasp reflex. IV. Muscle weakness and atrophy.",
  options: {
    A: "I, II and IV",
    B: "I and II",
    C: "II, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Klumpke's palsy affects the lower brachial plexus, mainly C8–T1. It commonly affects the forearm, wrist, and hand, causing weak grip, absent grasp reflex, wrist problems, and muscle weakness.",
  rationalesIncorrect: {
    A: "This includes shoulder and arm paralysis, which is more typical of Erb's palsy affecting the upper brachial plexus.",
    B: "This also includes shoulder and arm paralysis and omits important lower brachial plexus features such as absent grasp reflex and muscle weakness."
  }
},

{
  question: "Knowledge of the inclination of the pelvis is applied in the care of the pregnant woman mostly during:",
  options: {
    A: "Puerperium",
    B: "Labour",
    C: "Antenatal period"
  },
  correctAnswer: "B",
  rationaleCorrect: "Knowledge of pelvic inclination is especially useful during labour because maternal positioning can influence descent of the presenting part and the mechanics of delivery.",
  rationalesIncorrect: {
    A: "Pelvic inclination is not mainly applied during the puerperium.",
    C: "Pelvic assessment may be done antenatally, but the practical application of pelvic inclination is most important during labour."
  }
},

{
  question: "A 20-year-old woman with HIV acquired through blood transfusion has negative initial cervical cytology. At what age is co-testing with cervical cytology and HPV testing recommended?",
  options: {
    A: "Age 30",
    B: "Age 25",
    C: "Age 21"
  },
  correctAnswer: "A",
  rationaleCorrect: "For people with HIV who are younger than 30, cervical cytology is the primary screening method. HPV co-testing is generally used from age 30 onward, not at age 20 or 21.",
  rationalesIncorrect: {
    B: "Age 25 is not the usual age for HPV co-testing in HIV-positive women.",
    C: "Cervical cytology may begin at age 21 in people with HIV, but co-testing is generally not the preferred method before age 30."
  }
},

{
  question: "A premature male newborn has no testicles detected in the scrotum. How should the midwife document this finding?",
  options: {
    A: "Interstitial cryptorch",
    B: "Spermatic cord",
    C: "Cryptorchism"
  },
  correctAnswer: "C",
  rationaleCorrect: "Cryptorchism, also called cryptorchidism, means undescended testis. It is more common in premature male babies.",
  rationalesIncorrect: {
    A: "Interstitial cryptorch is not the correct term for absent testes in the scrotum.",
    B: "The spermatic cord is an anatomical structure, not the diagnosis."
  }
},

{
  question: "Deep transverse arrest in prolonged labour occurs when the fetal head is trapped by the:",
  options: {
    A: "Ischial spine",
    B: "Sacrococcygeal joint",
    C: "Iliac spine"
  },
  correctAnswer: "A",
  rationaleCorrect: "Deep transverse arrest occurs at the level of the midpelvis, around the ischial spines. The fetal head fails to rotate and descend properly at this level.",
  rationalesIncorrect: {
    B: "The sacrococcygeal joint is posterior and lower in the pelvis, not the usual site of deep transverse arrest.",
    C: "The iliac spines are part of the pelvis but are not the landmark involved in deep transverse arrest."
  }
},

{
  question: "A Para 4 mother with a 6-month-old baby reports irregular menstruation after delivery. If she is breastfeeding, this is most likely due to:",
  options: {
    A: "High level of prolactin",
    B: "Complication of labour",
    C: "Hormonal imbalance"
  },
  correctAnswer: "A",
  rationaleCorrect: "During breastfeeding, prolactin remains high and can suppress ovulation. This may cause absent or irregular menstruation during the postpartum period.",
  rationalesIncorrect: {
    B: "Irregular menstruation after delivery is usually hormonal, not automatically a labour complication.",
    C: "Hormonal imbalance is too general. The specific hormone commonly responsible during breastfeeding is prolactin."
  }
},

{
  question: "A 32-year-old G4P2 at 35 weeks reports decreased fetal movement. The non-stress test is reactive, and ultrasound shows reassuring fetal tone, breathing, movement, and amniotic fluid status. What is the next step?",
  options: {
    A: "Induction of labour",
    B: "Reassure, rest, and follow-up",
    C: "Follow-up evaluation of the percentile of amniotic fluid"
  },
  correctAnswer: "B",
  rationaleCorrect: "A reactive non-stress test with reassuring fetal tone, breathing, movement, and amniotic fluid assessment suggests that the foetus is currently well. The appropriate step is reassurance, rest, follow-up, and advice to return if fetal movements reduce again.",
  rationalesIncorrect: {
    A: "Induction is not indicated when fetal assessment is reassuring at 35 weeks.",
    C: "Amniotic fluid has already been assessed as part of the evaluation. If it is normal, reassurance and follow-up are appropriate."
  }
},

{
  question: "Squatting during the second stage of labour facilitates delivery because:",
  options: {
    A: "Socially, it is the accepted posture",
    B: "The woman feels more comfortable",
    C: "There is an increase in the outlet dimension"
  },
  correctAnswer: "C",
  rationaleCorrect: "Squatting during the second stage can increase pelvic outlet dimensions and use gravity to assist descent and delivery of the baby.",
  rationalesIncorrect: {
    A: "Social acceptance may vary, but the clinical reason is improved pelvic outlet space.",
    B: "Comfort may be a benefit, but the main obstetric advantage is increased outlet dimension."
  }
},

{
  question: "A puerperal mother asks where milk is stored in the breast. What is the best description?",
  options: {
    A: "A central duct into which the tubules run",
    B: "Small ducts which connect the alveoli",
    C: "Widened-out portions beneath the areola"
  },
  correctAnswer: "C",
  rationaleCorrect: "Milk is stored temporarily in widened areas of the lactiferous ducts known as lactiferous sinuses or ampullae, located beneath the areola.",
  rationalesIncorrect: {
    A: "This describes a duct pathway but not the main milk storage area.",
    B: "Small ducts transport milk from the alveoli but are not the main storage area."
  }
},

{
  question: "A pregnant woman has raised alpha-fetoprotein in the amniotic fluid. Which condition is not typically indicated by this finding?",
  options: {
    A: "Anencephaly",
    B: "Spina bifida",
    C: "Turner's syndrome"
  },
  correctAnswer: "C",
  rationaleCorrect: "Raised alpha-fetoprotein is associated with open neural tube defects such as anencephaly and spina bifida. Turner's syndrome is a chromosomal disorder and is not classically associated with raised amniotic fluid alpha-fetoprotein.",
  rationalesIncorrect: {
    A: "Anencephaly is an open neural tube defect and can cause raised alpha-fetoprotein.",
    B: "Open spina bifida can also cause raised alpha-fetoprotein."
  }
},

{
  question: "A baby develops jaundice on the third postnatal day. What is the common explanation for this jaundice?",
  options: {
    A: "Medication taken by the mother",
    B: "Exposure to morning sun",
    C: "Increased red blood cell breakdown"
  },
  correctAnswer: "C",
  rationaleCorrect: "Physiological jaundice commonly appears after the first 24 hours and may peak around day 3–5. It occurs because newborns have increased red blood cell breakdown and an immature liver that clears bilirubin slowly.",
  rationalesIncorrect: {
    A: "Some medicines may affect newborns, but this is not the common explanation for jaundice on day 3.",
    B: "Exposure to morning sun does not cause neonatal jaundice."
  }
},

{
  question: "A 34-year-old G1P0 at 31 weeks presents with painful contractions every 5 minutes. There is no vaginal bleeding, leakage of fluid, or discharge, and fetal movement is good. What is the best management?",
  options: {
    A: "Refer her to the gynaecologist",
    B: "Administer intravenous ampicillin and gentamicin",
    C: "Administer intravenous infusion"
  },
  correctAnswer: "A",
  rationaleCorrect: "Painful contractions at 31 weeks suggest possible preterm labour. She needs urgent assessment by the obstetric or gynaecology team for confirmation of labour, fetal assessment, and possible interventions such as corticosteroids, tocolysis, magnesium sulfate, or antibiotics if indicated.",
  rationalesIncorrect: {
    B: "Antibiotics are not automatically indicated because there is no clear evidence of infection, ruptured membranes, or chorioamnionitis in the stem.",
    C: "Intravenous fluids alone do not adequately manage possible preterm labour."
  }
},

{
  question: "A newborn has caput succedaneum after delivery. How should this be explained to the mother?",
  options: {
    A: "It is a swelling that does not cross a suture line but pits on pressure",
    B: "It is a swelling located at the base of the hairline due to excessive pressure in the birth canal",
    C: "It is a swelling of the scalp caused by pressure from the uterus or vaginal wall during delivery"
  },
  correctAnswer: "C",
  rationaleCorrect: "Caput succedaneum is swelling of the newborn's scalp caused by pressure during labour and delivery. It is typically soft, may pit on pressure, and can cross suture lines.",
  rationalesIncorrect: {
    A: "This is incorrect because caput succedaneum can cross suture lines. A swelling that does not cross suture lines is more suggestive of cephalhaematoma.",
    B: "Caput is usually on the presenting part of the scalp, not specifically at the base of the hairline."
  }
},

{
  question: "A 30-week pregnant multigravida complains of severe pain when walking. What is the most likely explanation?",
  options: {
    A: "She may be having a malpresenting baby",
    B: "Overstretching of the ligaments due to the effect of relaxin",
    C: "Pressure from the presenting part on the sacrum"
  },
  correctAnswer: "B",
  rationaleCorrect: "During pregnancy, relaxin and other hormonal changes loosen pelvic ligaments. In a multigravida, this may cause pelvic girdle pain or difficulty walking, especially in late pregnancy.",
  rationalesIncorrect: {
    A: "Malpresentation does not usually present mainly as severe pain when walking.",
    C: "Pressure from the presenting part on the sacrum may cause discomfort later in pregnancy or labour, but the ligament-stretching effect of relaxin better explains walking pain."
  }
},

{
  question: "A 10-week pregnant woman presents with frequency of micturition and dysuria. What should the midwife anticipate?",
  options: {
    A: "Warm sitz bath will solve her problem",
    B: "There is a urinary infection",
    C: "Frequency of micturition is normal in the first trimester"
  },
  correctAnswer: "B",
  rationaleCorrect: "Frequency of micturition can be normal in early pregnancy, but the presence of dysuria suggests urinary tract infection. She should be assessed and managed appropriately.",
  rationalesIncorrect: {
    A: "A warm sitz bath may provide comfort for some perineal symptoms but will not treat a urinary infection.",
    C: "Frequency alone can be normal in the first trimester, but dysuria makes infection more likely."
  }
},
{
  question: "During examination of newborn reflexes, the baby is held prone and suspended over the examiner's arm. The baby momentarily holds the head level with the body and flexes the limbs. Which reflex or test is being assessed?",
  options: {
    A: "Tonic neck reflex",
    B: "Ventral suspension",
    C: "Rooting reflex"
  },
  correctAnswer: "B",
  rationaleCorrect: "Ventral suspension is assessed by holding the baby prone while supporting the abdomen. A normal newborn briefly keeps the head in line with the body and flexes the limbs.",
  rationalesIncorrect: {
    A: "The tonic neck reflex is seen when the baby's head is turned to one side, causing extension of the limbs on the face side and flexion on the opposite side.",
    C: "The rooting reflex occurs when the baby turns the head towards a touched cheek or mouth area in search of the nipple."
  }
},

{
  question: "In labour, uterine contractions commence in which part of the uterus?",
  options: {
    A: "Fundus",
    B: "Body",
    C: "Cornua"
  },
  correctAnswer: "C",
  rationaleCorrect: "Uterine contractions begin from pacemaker areas near the uterine cornua in the upper uterus and spread downward. This produces fundal dominance, helping to push the foetus towards the cervix.",
  rationalesIncorrect: {
    A: "The fundus is the dominant contracting part of the uterus, but the more specific point of origin is near the cornua.",
    B: "The body of the uterus contracts, but contractions do not primarily commence there."
  }
},

{
  question: "In midwifery, the pelvis is considered clinically adequate when:",
  options: {
    A: "The presenting part is more than halfway through the pelvic cavity",
    B: "The woman has a broad sacral area",
    C: "The widest part of the fetal head has entered the pelvic brim"
  },
  correctAnswer: "C",
  rationaleCorrect: "A pelvis is considered clinically adequate when the widest presenting diameter of the fetal head is able to pass through the pelvic brim, indicating engagement.",
  rationalesIncorrect: {
    A: "Descent into the pelvic cavity is useful, but pelvic adequacy is first shown by successful passage through the pelvic brim.",
    B: "A broad sacral area may suggest a favourable pelvis, but it does not alone confirm pelvic adequacy."
  }
},

{
  question: "Which measure is most important in preventing infection in midwifery practice?",
  options: {
    A: "Checking vital signs regularly",
    B: "Universal precautions",
    C: "Antibiotic cones"
  },
  correctAnswer: "B",
  rationaleCorrect: "Universal precautions reduce transmission of infection by assuming that all blood and body fluids may be infectious. This includes hand hygiene, use of gloves, safe disposal of sharps, and aseptic technique.",
  rationalesIncorrect: {
    A: "Checking vital signs helps detect illness or infection, but it does not directly prevent infection.",
    C: "Antibiotics should not be used routinely to prevent infection unless clearly indicated."
  }
},

{
  question: "In a pregnant woman with polyhydramnios, which of the following is least likely to occur during labour?",
  options: {
    A: "Cord prolapse",
    B: "Postpartum haemorrhage",
    C: "Unstable lie"
  },
  correctAnswer: "B",
  rationaleCorrect: "Cord prolapse and unstable lie can occur during labour because excessive amniotic fluid prevents stable engagement of the presenting part. Postpartum haemorrhage is a complication after delivery, not strictly during labour.",
  rationalesIncorrect: {
    A: "Polyhydramnios increases the risk of cord prolapse, especially after rupture of membranes.",
    C: "Excess amniotic fluid allows the foetus to move freely, increasing the risk of unstable lie."
  }
},

{
  question: "Which test is used during newborn examination to detect congenital hip dysplasia?",
  options: {
    A: "Pavlik test",
    B: "Barlow's test",
    C: "Potter's test"
  },
  correctAnswer: "B",
  rationaleCorrect: "Barlow's test is used during newborn examination to detect hip instability or developmental dysplasia of the hip. The Barlow and Ortolani manoeuvres are standard clinical screening tests for neonatal hip dysplasia.",
  rationalesIncorrect: {
    A: "Pavlik is associated with the Pavlik harness, which is used in treatment, not as the main screening test.",
    C: "Potter's test is not the standard test for congenital hip dysplasia."
  }
},

{
  question: "Which of the following is not a function of oestrogen?",
  options: {
    A: "It causes the development of secondary sex characteristics",
    B: "It causes an increase in body temperature during ovulation",
    C: "It promotes regeneration of the endometrium after menstruation"
  },
  correctAnswer: "B",
  rationaleCorrect: "The rise in basal body temperature after ovulation is mainly due to progesterone, not oestrogen. Oestrogen is mainly responsible for development of female secondary sex characteristics and regeneration of the endometrium.",
  rationalesIncorrect: {
    A: "Development of secondary sex characteristics is a true function of oestrogen.",
    C: "Regeneration or proliferation of the endometrium after menstruation is a true function of oestrogen."
  }
},

{
  question: "In women with chronic hypertension during pregnancy, antihypertensive medications primarily seek to reduce:",
  options: {
    A: "Fetal intrauterine growth restriction",
    B: "Maternal cardiovascular risk",
    C: "Placental abruption"
  },
  correctAnswer: "B",
  rationaleCorrect: "Antihypertensive medication in pregnancy primarily protects the mother from complications of severe hypertension, including stroke and cardiovascular complications. The main goal is maternal blood pressure control.",
  rationalesIncorrect: {
    A: "Hypertension can be associated with fetal growth restriction, but antihypertensive drugs are mainly given to control maternal blood pressure and reduce maternal risk.",
    C: "Chronic hypertension increases the risk of placental abruption, but the primary reason for medication is maternal blood pressure control."
  }
},

{
  question: "A baby presents with moist papular or vesicular skin rash in the axillae, neck, perineum, and umbilical region. How would this rash be explained to the mother?",
  options: {
    A: "Cutaneous candidiasis",
    B: "Pseudomembranous candidiasis",
    C: "Chlamydia infection"
  },
  correctAnswer: "A",
  rationaleCorrect: "Cutaneous candidiasis affects moist skin folds such as the neck, axillae, groin, perineum, and umbilical area. It may appear as a red, moist papular or vesicular rash.",
  rationalesIncorrect: {
    B: "Pseudomembranous candidiasis refers to oral thrush, which presents with white patches in the mouth.",
    C: "Chlamydia infection in newborns commonly presents with conjunctivitis or pneumonia, not moist skin-fold rashes."
  }
},

{
  question: "When which male reproductive organ is destroyed, sperm production is reduced?",
  options: {
    A: "Testes",
    B: "Vas deferens",
    C: "Seminal vesicles"
  },
  correctAnswer: "A",
  rationaleCorrect: "The testes are responsible for sperm production. Damage to the testes can therefore reduce or stop sperm production.",
  rationalesIncorrect: {
    B: "The vas deferens transports sperm from the epididymis but does not produce sperm.",
    C: "The seminal vesicles produce seminal fluid, but they do not produce sperm cells."
  }
},

{
  question: "Increased frequency of micturition during labour is most commonly associated with:",
  options: {
    A: "Breech presentation",
    B: "Brow presentation",
    C: "Occipito-posterior position"
  },
  correctAnswer: "C",
  rationaleCorrect: "Occipito-posterior position can cause pressure against the sacrum and bladder region, leading to backache, slow labour, and increased frequency of micturition.",
  rationalesIncorrect: {
    A: "Breech presentation is associated with the buttocks or feet presenting first, but frequency of micturition is not the classic feature.",
    B: "Brow presentation affects engagement and labour progress, but it is not the most common association with frequent micturition."
  }
},

{
  question: "In-vitro fertilisation in patients with primary ovarian failure due to Turner's syndrome is not recommended because of the risk of which complication during pregnancy?",
  options: {
    A: "Aortic rupture",
    B: "Bowel rupture",
    C: "Uterine rupture"
  },
  correctAnswer: "A",
  rationaleCorrect: "Turner syndrome is associated with cardiovascular abnormalities, and pregnancy can increase the risk of aortic dissection or rupture. Assisted reproduction requires careful cardiovascular evaluation and may be contraindicated in high-risk patients.",
  rationalesIncorrect: {
    B: "Bowel rupture is not the major pregnancy risk associated with Turner syndrome.",
    C: "Uterine rupture is more associated with uterine scars or obstructed labour, not Turner syndrome."
  }
},

{
  question: "A 35-year-old breastfeeding mother wants to know the earliest time she can start combined oral contraceptive pills postpartum from the options listed. Which is the best answer?",
  options: {
    A: "2 days",
    B: "7 days",
    C: "21 days"
  },
  correctAnswer: "C",
  rationaleCorrect: "Among the options, 21 days is the best answer because combined hormonal contraceptives should not be used before 21 days postpartum due to increased thromboembolism risk. For breastfeeding mothers, many guidelines are more cautious and may recommend delaying combined hormonal methods further depending on breastfeeding status and risk factors.",
  rationalesIncorrect: {
    A: "Two days postpartum is too early because the risk of blood clots is high, and combined hormonal contraceptives are contraindicated before 21 days postpartum.",
    B: "Seven days postpartum is also too early for combined oral contraceptives."
  }
},

{
  question: "Klinefelter syndrome is an XXY abnormality that affects boys. At what stage is it normally diagnosed?",
  options: {
    A: "At puberty",
    B: "At birth",
    C: "In utero"
  },
  correctAnswer: "A",
  rationaleCorrect: "Klinefelter syndrome is often recognised at puberty when features such as small testes, delayed or incomplete puberty, tall stature, reduced facial hair, or infertility become more obvious.",
  rationalesIncorrect: {
    B: "Many boys with Klinefelter syndrome appear normal at birth, so it is often missed.",
    C: "It can be detected prenatally through genetic testing, but this is not when it is normally diagnosed in many cases."
  }
},

{
  question: "How would Klumpke's palsy be identified? I. Paralysis of the shoulder and arm. II. Wrist and hands are paralysed. III. Wrist drop and no grasp reflex. IV. Muscle weakness and atrophy.",
  options: {
    A: "I, II and IV",
    B: "I and II",
    C: "II, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Klumpke's palsy affects the lower brachial plexus, mainly C8–T1. It commonly affects the forearm, wrist, and hand, causing weak grip, absent grasp reflex, wrist problems, and muscle weakness.",
  rationalesIncorrect: {
    A: "This includes shoulder and arm paralysis, which is more typical of Erb's palsy affecting the upper brachial plexus.",
    B: "This also includes shoulder and arm paralysis and omits important lower brachial plexus features such as absent grasp reflex and muscle weakness."
  }
},

{
  question: "Knowledge of the inclination of the pelvis is applied in the care of the pregnant woman mostly during:",
  options: {
    A: "Puerperium",
    B: "Labour",
    C: "Antenatal period"
  },
  correctAnswer: "B",
  rationaleCorrect: "Knowledge of pelvic inclination is especially useful during labour because maternal positioning can influence descent of the presenting part and the mechanics of delivery.",
  rationalesIncorrect: {
    A: "Pelvic inclination is not mainly applied during the puerperium.",
    C: "Pelvic assessment may be done antenatally, but the practical application of pelvic inclination is most important during labour."
  }
},

{
  question: "A 20-year-old woman with HIV acquired through blood transfusion has negative initial cervical cytology. At what age is co-testing with cervical cytology and HPV testing recommended?",
  options: {
    A: "Age 30",
    B: "Age 25",
    C: "Age 21"
  },
  correctAnswer: "A",
  rationaleCorrect: "For people with HIV who are younger than 30, cervical cytology is the primary screening method. HPV co-testing is generally used from age 30 onward, not at age 20 or 21.",
  rationalesIncorrect: {
    B: "Age 25 is not the usual age for HPV co-testing in HIV-positive women.",
    C: "Cervical cytology may begin at age 21 in people with HIV, but co-testing is generally not the preferred method before age 30."
  }
},

{
  question: "A premature male newborn has no testicles detected in the scrotum. How should the midwife document this finding?",
  options: {
    A: "Interstitial cryptorch",
    B: "Spermatic cord",
    C: "Cryptorchism"
  },
  correctAnswer: "C",
  rationaleCorrect: "Cryptorchism, also called cryptorchidism, means undescended testis. It is more common in premature male babies.",
  rationalesIncorrect: {
    A: "Interstitial cryptorch is not the correct term for absent testes in the scrotum.",
    B: "The spermatic cord is an anatomical structure, not the diagnosis."
  }
},

{
  question: "Deep transverse arrest in prolonged labour occurs when the fetal head is trapped by the:",
  options: {
    A: "Ischial spine",
    B: "Sacrococcygeal joint",
    C: "Iliac spine"
  },
  correctAnswer: "A",
  rationaleCorrect: "Deep transverse arrest occurs at the level of the midpelvis, around the ischial spines. The fetal head fails to rotate and descend properly at this level.",
  rationalesIncorrect: {
    B: "The sacrococcygeal joint is posterior and lower in the pelvis, not the usual site of deep transverse arrest.",
    C: "The iliac spines are part of the pelvis but are not the landmark involved in deep transverse arrest."
  }
},

{
  question: "A Para 4 mother with a 6-month-old baby reports irregular menstruation after delivery. If she is breastfeeding, this is most likely due to:",
  options: {
    A: "High level of prolactin",
    B: "Complication of labour",
    C: "Hormonal imbalance"
  },
  correctAnswer: "A",
  rationaleCorrect: "During breastfeeding, prolactin remains high and can suppress ovulation. This may cause absent or irregular menstruation during the postpartum period.",
  rationalesIncorrect: {
    B: "Irregular menstruation after delivery is usually hormonal, not automatically a labour complication.",
    C: "Hormonal imbalance is too general. The specific hormone commonly responsible during breastfeeding is prolactin."
  }
},

{
  question: "A 32-year-old G4P2 at 35 weeks reports decreased fetal movement. The non-stress test is reactive, and ultrasound shows reassuring fetal tone, breathing, movement, and amniotic fluid status. What is the next step?",
  options: {
    A: "Induction of labour",
    B: "Reassure, rest, and follow-up",
    C: "Follow-up evaluation of the percentile of amniotic fluid"
  },
  correctAnswer: "B",
  rationaleCorrect: "A reactive non-stress test with reassuring fetal tone, breathing, movement, and amniotic fluid assessment suggests that the foetus is currently well. The appropriate step is reassurance, rest, follow-up, and advice to return if fetal movements reduce again.",
  rationalesIncorrect: {
    A: "Induction is not indicated when fetal assessment is reassuring at 35 weeks.",
    C: "Amniotic fluid has already been assessed as part of the evaluation. If it is normal, reassurance and follow-up are appropriate."
  }
},

{
  question: "Squatting during the second stage of labour facilitates delivery because:",
  options: {
    A: "Socially, it is the accepted posture",
    B: "The woman feels more comfortable",
    C: "There is an increase in the outlet dimension"
  },
  correctAnswer: "C",
  rationaleCorrect: "Squatting during the second stage can increase pelvic outlet dimensions and use gravity to assist descent and delivery of the baby.",
  rationalesIncorrect: {
    A: "Social acceptance may vary, but the clinical reason is improved pelvic outlet space.",
    B: "Comfort may be a benefit, but the main obstetric advantage is increased outlet dimension."
  }
},

{
  question: "A puerperal mother asks where milk is stored in the breast. What is the best description?",
  options: {
    A: "A central duct into which the tubules run",
    B: "Small ducts which connect the alveoli",
    C: "Widened-out portions beneath the areola"
  },
  correctAnswer: "C",
  rationaleCorrect: "Milk is stored temporarily in widened areas of the lactiferous ducts known as lactiferous sinuses or ampullae, located beneath the areola.",
  rationalesIncorrect: {
    A: "This describes a duct pathway but not the main milk storage area.",
    B: "Small ducts transport milk from the alveoli but are not the main storage area."
  }
},

{
  question: "A pregnant woman has raised alpha-fetoprotein in the amniotic fluid. Which condition is not typically indicated by this finding?",
  options: {
    A: "Anencephaly",
    B: "Spina bifida",
    C: "Turner's syndrome"
  },
  correctAnswer: "C",
  rationaleCorrect: "Raised alpha-fetoprotein is associated with open neural tube defects such as anencephaly and spina bifida. Turner's syndrome is a chromosomal disorder and is not classically associated with raised amniotic fluid alpha-fetoprotein.",
  rationalesIncorrect: {
    A: "Anencephaly is an open neural tube defect and can cause raised alpha-fetoprotein.",
    B: "Open spina bifida can also cause raised alpha-fetoprotein."
  }
},

{
  question: "A baby develops jaundice on the third postnatal day. What is the common explanation for this jaundice?",
  options: {
    A: "Medication taken by the mother",
    B: "Exposure to morning sun",
    C: "Increased red blood cell breakdown"
  },
  correctAnswer: "C",
  rationaleCorrect: "Physiological jaundice commonly appears after the first 24 hours and may peak around day 3–5. It occurs because newborns have increased red blood cell breakdown and an immature liver that clears bilirubin slowly.",
  rationalesIncorrect: {
    A: "Some medicines may affect newborns, but this is not the common explanation for jaundice on day 3.",
    B: "Exposure to morning sun does not cause neonatal jaundice."
  }
},

{
  question: "A 34-year-old G1P0 at 31 weeks presents with painful contractions every 5 minutes. There is no vaginal bleeding, leakage of fluid, or discharge, and fetal movement is good. What is the best management?",
  options: {
    A: "Refer her to the gynaecologist",
    B: "Administer intravenous ampicillin and gentamicin",
    C: "Administer intravenous infusion"
  },
  correctAnswer: "A",
  rationaleCorrect: "Painful contractions at 31 weeks suggest possible preterm labour. She needs urgent assessment by the obstetric or gynaecology team for confirmation of labour, fetal assessment, and possible interventions such as corticosteroids, tocolysis, magnesium sulfate, or antibiotics if indicated.",
  rationalesIncorrect: {
    B: "Antibiotics are not automatically indicated because there is no clear evidence of infection, ruptured membranes, or chorioamnionitis in the stem.",
    C: "Intravenous fluids alone do not adequately manage possible preterm labour."
  }
},

{
  question: "A newborn has caput succedaneum after delivery. How should this be explained to the mother?",
  options: {
    A: "It is a swelling that does not cross a suture line but pits on pressure",
    B: "It is a swelling located at the base of the hairline due to excessive pressure in the birth canal",
    C: "It is a swelling of the scalp caused by pressure from the uterus or vaginal wall during delivery"
  },
  correctAnswer: "C",
  rationaleCorrect: "Caput succedaneum is swelling of the newborn's scalp caused by pressure during labour and delivery. It is typically soft, may pit on pressure, and can cross suture lines.",
  rationalesIncorrect: {
    A: "This is incorrect because caput succedaneum can cross suture lines. A swelling that does not cross suture lines is more suggestive of cephalhaematoma.",
    B: "Caput is usually on the presenting part of the scalp, not specifically at the base of the hairline."
  }
},

{
  question: "A 30-week pregnant multigravida complains of severe pain when walking. What is the most likely explanation?",
  options: {
    A: "She may be having a malpresenting baby",
    B: "Overstretching of the ligaments due to the effect of relaxin",
    C: "Pressure from the presenting part on the sacrum"
  },
  correctAnswer: "B",
  rationaleCorrect: "During pregnancy, relaxin and other hormonal changes loosen pelvic ligaments. In a multigravida, this may cause pelvic girdle pain or difficulty walking, especially in late pregnancy.",
  rationalesIncorrect: {
    A: "Malpresentation does not usually present mainly as severe pain when walking.",
    C: "Pressure from the presenting part on the sacrum may cause discomfort later in pregnancy or labour, but the ligament-stretching effect of relaxin better explains walking pain."
  }
},

{
  question: "A 10-week pregnant woman presents with frequency of micturition and dysuria. What should the midwife anticipate?",
  options: {
    A: "Warm sitz bath will solve her problem",
    B: "There is a urinary infection",
    C: "Frequency of micturition is normal in the first trimester"
  },
  correctAnswer: "B",
  rationaleCorrect: "Frequency of micturition can be normal in early pregnancy, but the presence of dysuria suggests urinary tract infection. She should be assessed and managed appropriately.",
  rationalesIncorrect: {
    A: "A warm sitz bath may provide comfort for some perineal symptoms but will not treat a urinary infection.",
    C: "Frequency alone can be normal in the first trimester, but dysuria makes infection more likely."
  }
},

{
  question: "A 29-week pregnant woman ate a sandwich made with meat contaminated with E. coli. She is asymptomatic with no fever, chills, body aches, or contractions. What is the next best step?",
  options: {
    A: "Blood and stool cultures with treatment if positive",
    B: "Stool cultures and treatment",
    C: "No testing or treatment unless she develops symptoms"
  },
  correctAnswer: "C",
  rationaleCorrect: "Since she is asymptomatic, there is no need for immediate testing or treatment. She should be reassured, educated to observe for symptoms such as diarrhoea, fever, abdominal cramps, vomiting, or contractions, and told to report immediately if they occur.",
  rationalesIncorrect: {
    A: "Blood and stool cultures with treatment are unnecessary when she has no symptoms.",
    B: "Stool cultures and treatment should not be started just because of exposure without symptoms or positive clinical findings."
  }
},

{
  question: "A baby is suspected to have Horner's syndrome. Which of the following findings is not used to confirm the diagnosis?",
  options: {
    A: "Drooping eyelid",
    B: "Swelling on the affected part",
    C: "Constriction of pupil"
  },
  correctAnswer: "B",
  rationaleCorrect: "Horner's syndrome is associated with drooping of the eyelid and constriction of the pupil on the affected side. Swelling is not a typical feature.",
  rationalesIncorrect: {
    A: "Drooping eyelid, also called ptosis, is a classic sign of Horner's syndrome.",
    C: "Constriction of the pupil, also called miosis, is another classic sign of Horner's syndrome."
  }
},

{
  question: "A postnatal mother complains of leakage of urine although she does not feel any urge to urinate. What is the most likely diagnosis?",
  options: {
    A: "True incontinence",
    B: "Stress incontinence",
    C: "Acute incontinence"
  },
  correctAnswer: "A",
  rationaleCorrect: "True incontinence refers to continuous or involuntary leakage of urine without the normal urge to urinate. The key clue is that she leaks urine even though she does not feel the urge.",
  rationalesIncorrect: {
    B: "Stress incontinence occurs during coughing, sneezing, laughing, or lifting due to increased abdominal pressure.",
    C: "Acute incontinence is not the best classification for painless leakage without urge in this context."
  }
},

{
  question: "A sexually active woman presents with mild lower abdominal pain, fever, cervical tenderness, uterine and adnexal tenderness, mucopurulent vaginal discharge, elevated inflammatory markers, and gram-negative diplococci on culture. What is the most likely diagnosis?",
  options: {
    A: "Cervical dysplasia",
    B: "Tubo-ovarian abscess",
    C: "Acute salpingitis"
  },
  correctAnswer: "C",
  rationaleCorrect: "The symptoms suggest pelvic inflammatory disease involving the fallopian tubes. Lower abdominal pain, fever, cervical motion tenderness, adnexal tenderness, mucopurulent discharge, and gonococcal infection all support acute salpingitis.",
  rationalesIncorrect: {
    A: "Cervical dysplasia is a precancerous cervical change and does not usually present with fever, pelvic tenderness, and purulent discharge.",
    B: "Tubo-ovarian abscess is a more severe complication of pelvic inflammatory disease and is usually associated with a pelvic mass or severe illness, which is not stated here."
  }
},

{
  question: "Which two signs best support a diagnosis of Down's syndrome in a newborn?",
  options: {
    A: "Clenched fist with overriding fingers",
    B: "Short sternum and club feet",
    C: "Short neck with flattened facial features"
  },
  correctAnswer: "C",
  rationaleCorrect: "Down's syndrome commonly presents with features such as flat facial profile, short neck, upward slanting eyes, low muscle tone, and single palmar crease.",
  rationalesIncorrect: {
    A: "Clenched fist with overriding fingers is more typical of Edwards syndrome.",
    B: "Short sternum and club feet are also more suggestive of Edwards syndrome rather than Down's syndrome."
  }
},

{
  question: "What is the best period to prepare mothers for exclusive breastfeeding?",
  options: {
    A: "Antenatal period",
    B: "Puberty",
    C: "Postpartum period"
  },
  correctAnswer: "A",
  rationaleCorrect: "The antenatal period is the best time to prepare mothers for breastfeeding. Education before delivery helps mothers understand exclusive breastfeeding, positioning, attachment, milk production, and common breastfeeding challenges.",
  rationalesIncorrect: {
    B: "Puberty is too early and not the practical period for preparing a pregnant woman for breastfeeding.",
    C: "Breastfeeding support continues after delivery, but preparation should begin before birth."
  }
},

{
  question: "A student midwife puts the placenta aside after delivery, cleans the mother, and congratulates her. What should the observer prompt her to do?",
  options: {
    A: "Congratulate her for her swiftness in cleaning and making the woman comfortable",
    B: "Prompt her that the placenta was not inspected",
    C: "Prompt her that she did not ask the woman to empty her bladder"
  },
  correctAnswer: "B",
  rationaleCorrect: "After the placenta is delivered, it must be inspected for completeness of the lobes and membranes. Failure to inspect the placenta may lead to missed retained placental tissue, which can cause postpartum haemorrhage or infection.",
  rationalesIncorrect: {
    A: "Comfort is important, but she omitted a critical safety step.",
    C: "Emptying the bladder is important, but the immediate omitted action after placental delivery is placental inspection."
  }
},

{
  question: "During antenatal assessment, a bulging is observed when the client bears down. What is the most likely explanation?",
  options: {
    A: "It is a normal expectation of the perineum when there is pressure from within",
    B: "The woman has weak perineal floor muscles",
    C: "Based on the woman's weight, it may be normal"
  },
  correctAnswer: "B",
  rationaleCorrect: "Bulging on bearing down suggests weakness of the pelvic floor muscles. Weak pelvic support may predispose the woman to prolapse or urinary incontinence.",
  rationalesIncorrect: {
    A: "Bulging during assessment should not be dismissed as normal.",
    C: "Weight may contribute to pelvic floor strain, but the direct explanation is weak pelvic floor muscles."
  }
},

{
  question: "A midwife teaches students to place the baby on the mother's abdomen immediately after birth. This is done to: I. Ensure that the mother sees the baby first. II. See if the curve of Carus is not straightened. III. Prevent injury to the perineum.",
  options: {
    A: "I only",
    B: "II and III",
    C: "I and II"
  },
  correctAnswer: "C",
  rationaleCorrect: "Placing the baby on the mother's abdomen immediately after birth allows the mother to see and receive the baby early. In delivery technique, the baby should also be handled in a way that follows the normal pelvic curve rather than being pulled improperly.",
  rationalesIncorrect: {
    A: "This is partly correct, but it does not include the delivery technique consideration.",
    B: "Preventing perineal injury is mainly related to controlled delivery of the head and shoulders, not simply placing the baby on the abdomen after delivery."
  }
},

{
  question: "Which functioning part of the ovary contains ovarian follicles at different stages of development and is surrounded by stroma?",
  options: {
    A: "Medulla",
    B: "Ampulla",
    C: "Cortex"
  },
  correctAnswer: "C",
  rationaleCorrect: "The ovarian cortex contains ovarian follicles at different stages of development. It lies beneath the outer surface and is supported by ovarian stroma.",
  rationalesIncorrect: {
    A: "The medulla is the central part of the ovary containing blood vessels, nerves, and connective tissue, but it is not the main follicle-containing area.",
    B: "The ampulla is part of the fallopian tube, not the ovary."
  }
},

{
  question: "A woman in the first stage of labour asks what she can do to prevent pelvic floor trauma. Which actions are appropriate? I. Empty bladder every hour. II. Adopt kneeling position when there is the urge to bear down. III. Perform pelvic floor exercises. IV. Lie on her side when there is the urge to bear down.",
  options: {
    A: "I, II and IV",
    B: "I, II and III",
    C: "I, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Emptying the bladder prevents obstruction to fetal descent and reduces pressure on pelvic tissues. Pelvic floor exercises strengthen the muscles, and lying on the side when there is an urge to bear down can help reduce unnecessary pressure and trauma during the first stage.",
  rationalesIncorrect: {
    A: "This includes kneeling with the urge to bear down, but early bearing down in the first stage should be discouraged because it may cause cervical swelling and pelvic floor trauma.",
    B: "This also includes kneeling with the urge to bear down and excludes side-lying, which can help reduce unnecessary pressure."
  }
},

{
  question: "Where are the living ligatures located?",
  options: {
    A: "Vagina",
    B: "Uterus",
    C: "Uterine"
  },
  correctAnswer: "B",
  rationaleCorrect: "The living ligatures refer to the interlacing muscle fibres of the uterus. After delivery, these fibres contract and compress the blood vessels to control bleeding.",
  rationalesIncorrect: {
    A: "The vagina does not contain the uterine muscle fibres known as living ligatures.",
    C: "Uterine is an adjective, not the correct anatomical location."
  }
},

{
  question: "Moulding is a protective mechanism of the delicate fetal brain. When moulding occurs, all the following happen except:",
  options: {
    A: "Elongation of the area at right angle",
    B: "No change occurs in the size of the hand",
    C: "Change in the shape of the fetal head"
  },
  correctAnswer: "B",
  rationaleCorrect: "Moulding refers to changes in the shape of the fetal head as the skull bones overlap during labour. It affects the fetal head, not the hand.",
  rationalesIncorrect: {
    A: "Moulding can cause alteration and elongation of the fetal head shape.",
    C: "Change in the shape of the fetal head is exactly what happens during moulding."
  }
},

{
  question: "A 2-week-old baby has a small painless swelling on the neck after excessive traction or twisting during labour. What is the likely diagnosis?",
  options: {
    A: "Erb's palsy",
    B: "Wry neck",
    C: "Bell's palsy"
  },
  correctAnswer: "B",
  rationaleCorrect: "A painless swelling in the neck after difficult delivery or excessive traction may be due to injury of the sternocleidomastoid muscle, leading to congenital muscular torticollis, also called wry neck.",
  rationalesIncorrect: {
    A: "Erb's palsy affects the upper brachial plexus and presents with weakness or paralysis of the shoulder and arm.",
    C: "Bell's palsy affects the facial nerve and causes facial weakness, not a neck swelling."
  }
},

{
  question: "A 38-year-old woman with a mechanical mitral valve and chronic atrial fibrillation has excessive intermenstrual uterine bleeding. She has completed childbearing. What is the best treatment option?",
  options: {
    A: "Hysterectomy",
    B: "Depo-Provera",
    C: "Endometrial ablation"
  },
  correctAnswer: "C",
  rationaleCorrect: "Endometrial ablation is suitable for women with heavy abnormal uterine bleeding who have completed childbearing. It is less invasive than hysterectomy and avoids major surgery in a patient with significant cardiac disease.",
  rationalesIncorrect: {
    A: "Hysterectomy is effective but carries higher surgical and anaesthetic risk, especially in a patient with a mechanical valve and atrial fibrillation.",
    B: "Depo-Provera may reduce bleeding in some women, but in this case she has completed childbearing and needs a more definitive non-major surgical option."
  }
},

{
  question: "A 38-year-old G1P0 at 12 weeks has a desired pregnancy and a positive cell-free fetal DNA result for trisomy 16. What is the most appropriate next step?",
  options: {
    A: "Repeat cell-free fetal DNA screening",
    B: "Chorionic villus sampling",
    C: "Termination of pregnancy"
  },
  correctAnswer: "B",
  rationaleCorrect: "Cell-free fetal DNA is a screening test, not a diagnostic test. A positive result should be confirmed with diagnostic testing. At 12 weeks, chorionic villus sampling is an appropriate diagnostic option.",
  rationalesIncorrect: {
    A: "Repeating another screening test does not confirm the diagnosis.",
    C: "The pregnancy is desired, and termination should not be considered based on a screening result alone."
  }
},

{
  question: "A pregnant woman has vulval varicose veins. Which explanation is most appropriate?",
  options: {
    A: "There is relaxation of the blood vessels",
    B: "Diabetes",
    C: "Sitting down for a long period"
  },
  correctAnswer: "A",
  rationaleCorrect: "Pregnancy hormones relax the walls of blood vessels, and the growing uterus increases pressure on pelvic veins. These changes can lead to vulval varicosities.",
  rationalesIncorrect: {
    B: "Diabetes is not a direct common cause of vulval varicose veins in pregnancy.",
    C: "Prolonged sitting may worsen venous pooling, but pregnancy-related vascular relaxation is the better answer."
  }
},

{
  question: "A breastfeeding mother one day after delivery has fever, cough, cold, loss of appetite, and muscle aches. What is the best option for mother and child if the mother is stable?",
  options: {
    A: "Carry out laboratory investigation",
    B: "Conservative management of symptoms",
    C: "Maternal-neonatal separation"
  },
  correctAnswer: "B",
  rationaleCorrect: "The symptoms suggest a flu-like illness. If the mother is stable, she can continue breastfeeding with good hand hygiene, cough etiquette, and supportive care. Routine separation of mother and baby is not the best option unless the mother is severely ill or there is a specific infection-control indication.",
  rationalesIncorrect: {
    A: "Investigations may be needed if symptoms are severe or diagnosis is unclear, but the best general option here is supportive management while continuing breastfeeding safely.",
    C: "Separation is usually avoided because breastfeeding and bonding are important, and infection prevention measures can be used."
  }
},

{
  question: "A fair-coloured petite primigravida weighing 48 kg comes for ANC booking. Which type of pelvis is she most likely to have?",
  options: {
    A: "Anthropoid",
    B: "Justo minor",
    C: "Platypelloid"
  },
  correctAnswer: "B",
  rationaleCorrect: "A petite woman with low body weight may have a generally small but normally shaped pelvis. This is described as a justo minor pelvis.",
  rationalesIncorrect: {
    A: "An anthropoid pelvis has a long anteroposterior diameter and is not mainly described by small body size.",
    C: "A platypelloid pelvis is flat with a shortened anteroposterior diameter, not simply a small pelvis."
  }
},

{
  question: "A ruptured tubal pregnancy is an obstetric emergency because the woman can die from hypovolaemic shock. This is mainly because:",
  options: {
    A: "The fallopian tubes are mainly made up of blood vessels",
    B: "The uterine and ovarian arteries provide a rich blood supply during pregnancy",
    C: "Ruptured ectopic pregnancy inhibits venous return"
  },
  correctAnswer: "B",
  rationaleCorrect: "The fallopian tube receives blood supply from branches of the uterine and ovarian arteries. When a tubal pregnancy ruptures, severe internal bleeding may occur, leading to hypovolaemic shock.",
  rationalesIncorrect: {
    A: "This is anatomically incorrect. The fallopian tubes contain muscular, mucosal, and connective tissue layers, not mainly blood vessels.",
    C: "The major danger is haemorrhage, not inhibition of venous return."
  }
},

{
  question: "A 12-week pregnant woman has acute retention of urine, and ultrasound shows a retroverted uterus. What is the best management?",
  options: {
    A: "Terminate the pregnancy because the uterus cannot rise out of the hollow of the sacrum",
    B: "Prepare the client for surgery to reposition the uterus in the anteverted position",
    C: "Pass a urethral catheter to drain the urine, and the uterus will rise out of the pelvis"
  },
  correctAnswer: "C",
  rationaleCorrect: "A retroverted gravid uterus can cause urinary retention around the end of the first trimester. The immediate management is bladder drainage with a urethral catheter. As pregnancy progresses, the uterus usually rises out of the pelvis.",
  rationalesIncorrect: {
    A: "Termination of pregnancy is not indicated.",
    B: "Surgery is not the first-line management."
  }
},

{
  question: "Which advice is suitable for a mother whose baby has diaper rash? I. Wash and dry the soiled area. II. Change diaper when soiled. III. Expose the rash to air. IV. Apply baby powder to the rash.",
  options: {
    A: "II, III and IV",
    B: "I, II and III",
    C: "I and II"
  },
  correctAnswer: "B",
  rationaleCorrect: "Diaper rash care includes keeping the area clean and dry, changing diapers promptly when soiled, and exposing the area to air when possible. These reduce moisture and irritation.",
  rationalesIncorrect: {
    A: "This includes baby powder, which is not recommended because it may irritate the skin and can be inhaled by the baby.",
    C: "Washing, drying, and changing diapers are correct, but exposing the rash to air is also helpful."
  }
},

{
  question: "What is the best medication to apply to the newborn cord before discharge?",
  options: {
    A: "Methylated spirit",
    B: "Chlorhexidine",
    C: "Alcohol rub"
  },
  correctAnswer: "B",
  rationaleCorrect: "Chlorhexidine is commonly recommended for newborn cord care because it helps reduce bacterial contamination and prevents cord infection, especially in settings where infection risk is significant.",
  rationalesIncorrect: {
    A: "Methylated spirit has been used traditionally, but chlorhexidine is preferred for cord infection prevention.",
    C: "Alcohol rub is mainly used for hand hygiene and is not the best medication for newborn cord care."
  }
},
{
  question: "During examination of newborn reflexes, the baby is held prone and suspended over the examiner's arm. The baby momentarily holds the head level with the body and flexes the limbs. Which reflex or test is being assessed?",
  options: {
    A: "Tonic neck reflex",
    B: "Ventral suspension",
    C: "Rooting reflex"
  },
  correctAnswer: "B",
  rationaleCorrect: "Ventral suspension is assessed by holding the baby prone while supporting the abdomen. A normal newborn briefly keeps the head in line with the body and flexes the limbs.",
  rationalesIncorrect: {
    A: "The tonic neck reflex is seen when the baby's head is turned to one side, causing extension of the limbs on the face side and flexion on the opposite side.",
    C: "The rooting reflex occurs when the baby turns the head towards a touched cheek or mouth area in search of the nipple."
  }
},

{
  question: "In labour, uterine contractions commence in which part of the uterus?",
  options: {
    A: "Fundus",
    B: "Body",
    C: "Cornua"
  },
  correctAnswer: "C",
  rationaleCorrect: "Uterine contractions begin from pacemaker areas near the uterine cornua in the upper uterus and spread downward. This produces fundal dominance, helping to push the foetus towards the cervix.",
  rationalesIncorrect: {
    A: "The fundus is the dominant contracting part of the uterus, but the more specific point of origin is near the cornua.",
    B: "The body of the uterus contracts, but contractions do not primarily commence there."
  }
},

{
  question: "In midwifery, the pelvis is considered clinically adequate when:",
  options: {
    A: "The presenting part is more than halfway through the pelvic cavity",
    B: "The woman has a broad sacral area",
    C: "The widest part of the fetal head has entered the pelvic brim"
  },
  correctAnswer: "C",
  rationaleCorrect: "A pelvis is considered clinically adequate when the widest presenting diameter of the fetal head is able to pass through the pelvic brim, indicating engagement.",
  rationalesIncorrect: {
    A: "Descent into the pelvic cavity is useful, but pelvic adequacy is first shown by successful passage through the pelvic brim.",
    B: "A broad sacral area may suggest a favourable pelvis, but it does not alone confirm pelvic adequacy."
  }
},

{
  question: "Which measure is most important in preventing infection in midwifery practice?",
  options: {
    A: "Checking vital signs regularly",
    B: "Universal precautions",
    C: "Antibiotic cones"
  },
  correctAnswer: "B",
  rationaleCorrect: "Universal precautions reduce transmission of infection by assuming that all blood and body fluids may be infectious. This includes hand hygiene, use of gloves, safe disposal of sharps, and aseptic technique.",
  rationalesIncorrect: {
    A: "Checking vital signs helps detect illness or infection, but it does not directly prevent infection.",
    C: "Antibiotics should not be used routinely to prevent infection unless clearly indicated."
  }
},

{
  question: "In a pregnant woman with polyhydramnios, which of the following is least likely to occur during labour?",
  options: {
    A: "Cord prolapse",
    B: "Postpartum haemorrhage",
    C: "Unstable lie"
  },
  correctAnswer: "B",
  rationaleCorrect: "Cord prolapse and unstable lie can occur during labour because excessive amniotic fluid prevents stable engagement of the presenting part. Postpartum haemorrhage is a complication after delivery, not strictly during labour.",
  rationalesIncorrect: {
    A: "Polyhydramnios increases the risk of cord prolapse, especially after rupture of membranes.",
    C: "Excess amniotic fluid allows the foetus to move freely, increasing the risk of unstable lie."
  }
},

{
  question: "Which test is used during newborn examination to detect congenital hip dysplasia?",
  options: {
    A: "Pavlik test",
    B: "Barlow's test",
    C: "Potter's test"
  },
  correctAnswer: "B",
  rationaleCorrect: "Barlow's test is used during newborn examination to detect hip instability or developmental dysplasia of the hip. The Barlow and Ortolani manoeuvres are standard clinical screening tests for neonatal hip dysplasia.",
  rationalesIncorrect: {
    A: "Pavlik is associated with the Pavlik harness, which is used in treatment, not as the main screening test.",
    C: "Potter's test is not the standard test for congenital hip dysplasia."
  }
},

{
  question: "Which of the following is not a function of oestrogen?",
  options: {
    A: "It causes the development of secondary sex characteristics",
    B: "It causes an increase in body temperature during ovulation",
    C: "It promotes regeneration of the endometrium after menstruation"
  },
  correctAnswer: "B",
  rationaleCorrect: "The rise in basal body temperature after ovulation is mainly due to progesterone, not oestrogen. Oestrogen is mainly responsible for development of female secondary sex characteristics and regeneration of the endometrium.",
  rationalesIncorrect: {
    A: "Development of secondary sex characteristics is a true function of oestrogen.",
    C: "Regeneration or proliferation of the endometrium after menstruation is a true function of oestrogen."
  }
},

{
  question: "In women with chronic hypertension during pregnancy, antihypertensive medications primarily seek to reduce:",
  options: {
    A: "Fetal intrauterine growth restriction",
    B: "Maternal cardiovascular risk",
    C: "Placental abruption"
  },
  correctAnswer: "B",
  rationaleCorrect: "Antihypertensive medication in pregnancy primarily protects the mother from complications of severe hypertension, including stroke and cardiovascular complications. The main goal is maternal blood pressure control.",
  rationalesIncorrect: {
    A: "Hypertension can be associated with fetal growth restriction, but antihypertensive drugs are mainly given to control maternal blood pressure and reduce maternal risk.",
    C: "Chronic hypertension increases the risk of placental abruption, but the primary reason for medication is maternal blood pressure control."
  }
},

{
  question: "A baby presents with moist papular or vesicular skin rash in the axillae, neck, perineum, and umbilical region. How would this rash be explained to the mother?",
  options: {
    A: "Cutaneous candidiasis",
    B: "Pseudomembranous candidiasis",
    C: "Chlamydia infection"
  },
  correctAnswer: "A",
  rationaleCorrect: "Cutaneous candidiasis affects moist skin folds such as the neck, axillae, groin, perineum, and umbilical area. It may appear as a red, moist papular or vesicular rash.",
  rationalesIncorrect: {
    B: "Pseudomembranous candidiasis refers to oral thrush, which presents with white patches in the mouth.",
    C: "Chlamydia infection in newborns commonly presents with conjunctivitis or pneumonia, not moist skin-fold rashes."
  }
},

{
  question: "When which male reproductive organ is destroyed, sperm production is reduced?",
  options: {
    A: "Testes",
    B: "Vas deferens",
    C: "Seminal vesicles"
  },
  correctAnswer: "A",
  rationaleCorrect: "The testes are responsible for sperm production. Damage to the testes can therefore reduce or stop sperm production.",
  rationalesIncorrect: {
    B: "The vas deferens transports sperm from the epididymis but does not produce sperm.",
    C: "The seminal vesicles produce seminal fluid, but they do not produce sperm cells."
  }
},

{
  question: "Increased frequency of micturition during labour is most commonly associated with:",
  options: {
    A: "Breech presentation",
    B: "Brow presentation",
    C: "Occipito-posterior position"
  },
  correctAnswer: "C",
  rationaleCorrect: "Occipito-posterior position can cause pressure against the sacrum and bladder region, leading to backache, slow labour, and increased frequency of micturition.",
  rationalesIncorrect: {
    A: "Breech presentation is associated with the buttocks or feet presenting first, but frequency of micturition is not the classic feature.",
    B: "Brow presentation affects engagement and labour progress, but it is not the most common association with frequent micturition."
  }
},

{
  question: "In-vitro fertilisation in patients with primary ovarian failure due to Turner's syndrome is not recommended because of the risk of which complication during pregnancy?",
  options: {
    A: "Aortic rupture",
    B: "Bowel rupture",
    C: "Uterine rupture"
  },
  correctAnswer: "A",
  rationaleCorrect: "Turner syndrome is associated with cardiovascular abnormalities, and pregnancy can increase the risk of aortic dissection or rupture. Assisted reproduction requires careful cardiovascular evaluation and may be contraindicated in high-risk patients.",
  rationalesIncorrect: {
    B: "Bowel rupture is not the major pregnancy risk associated with Turner syndrome.",
    C: "Uterine rupture is more associated with uterine scars or obstructed labour, not Turner syndrome."
  }
},

{
  question: "A 35-year-old breastfeeding mother wants to know the earliest time she can start combined oral contraceptive pills postpartum from the options listed. Which is the best answer?",
  options: {
    A: "2 days",
    B: "7 days",
    C: "21 days"
  },
  correctAnswer: "C",
  rationaleCorrect: "Among the options, 21 days is the best answer because combined hormonal contraceptives should not be used before 21 days postpartum due to increased thromboembolism risk. For breastfeeding mothers, many guidelines are more cautious and may recommend delaying combined hormonal methods further depending on breastfeeding status and risk factors.",
  rationalesIncorrect: {
    A: "Two days postpartum is too early because the risk of blood clots is high, and combined hormonal contraceptives are contraindicated before 21 days postpartum.",
    B: "Seven days postpartum is also too early for combined oral contraceptives."
  }
},

{
  question: "Klinefelter syndrome is an XXY abnormality that affects boys. At what stage is it normally diagnosed?",
  options: {
    A: "At puberty",
    B: "At birth",
    C: "In utero"
  },
  correctAnswer: "A",
  rationaleCorrect: "Klinefelter syndrome is often recognised at puberty when features such as small testes, delayed or incomplete puberty, tall stature, reduced facial hair, or infertility become more obvious.",
  rationalesIncorrect: {
    B: "Many boys with Klinefelter syndrome appear normal at birth, so it is often missed.",
    C: "It can be detected prenatally through genetic testing, but this is not when it is normally diagnosed in many cases."
  }
},

{
  question: "How would Klumpke's palsy be identified? I. Paralysis of the shoulder and arm. II. Wrist and hands are paralysed. III. Wrist drop and no grasp reflex. IV. Muscle weakness and atrophy.",
  options: {
    A: "I, II and IV",
    B: "I and II",
    C: "II, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Klumpke's palsy affects the lower brachial plexus, mainly C8–T1. It commonly affects the forearm, wrist, and hand, causing weak grip, absent grasp reflex, wrist problems, and muscle weakness.",
  rationalesIncorrect: {
    A: "This includes shoulder and arm paralysis, which is more typical of Erb's palsy affecting the upper brachial plexus.",
    B: "This also includes shoulder and arm paralysis and omits important lower brachial plexus features such as absent grasp reflex and muscle weakness."
  }
},

{
  question: "Knowledge of the inclination of the pelvis is applied in the care of the pregnant woman mostly during:",
  options: {
    A: "Puerperium",
    B: "Labour",
    C: "Antenatal period"
  },
  correctAnswer: "B",
  rationaleCorrect: "Knowledge of pelvic inclination is especially useful during labour because maternal positioning can influence descent of the presenting part and the mechanics of delivery.",
  rationalesIncorrect: {
    A: "Pelvic inclination is not mainly applied during the puerperium.",
    C: "Pelvic assessment may be done antenatally, but the practical application of pelvic inclination is most important during labour."
  }
},

{
  question: "A 20-year-old woman with HIV acquired through blood transfusion has negative initial cervical cytology. At what age is co-testing with cervical cytology and HPV testing recommended?",
  options: {
    A: "Age 30",
    B: "Age 25",
    C: "Age 21"
  },
  correctAnswer: "A",
  rationaleCorrect: "For people with HIV who are younger than 30, cervical cytology is the primary screening method. HPV co-testing is generally used from age 30 onward, not at age 20 or 21.",
  rationalesIncorrect: {
    B: "Age 25 is not the usual age for HPV co-testing in HIV-positive women.",
    C: "Cervical cytology may begin at age 21 in people with HIV, but co-testing is generally not the preferred method before age 30."
  }
},

{
  question: "A premature male newborn has no testicles detected in the scrotum. How should the midwife document this finding?",
  options: {
    A: "Interstitial cryptorch",
    B: "Spermatic cord",
    C: "Cryptorchism"
  },
  correctAnswer: "C",
  rationaleCorrect: "Cryptorchism, also called cryptorchidism, means undescended testis. It is more common in premature male babies.",
  rationalesIncorrect: {
    A: "Interstitial cryptorch is not the correct term for absent testes in the scrotum.",
    B: "The spermatic cord is an anatomical structure, not the diagnosis."
  }
},

{
  question: "Deep transverse arrest in prolonged labour occurs when the fetal head is trapped by the:",
  options: {
    A: "Ischial spine",
    B: "Sacrococcygeal joint",
    C: "Iliac spine"
  },
  correctAnswer: "A",
  rationaleCorrect: "Deep transverse arrest occurs at the level of the midpelvis, around the ischial spines. The fetal head fails to rotate and descend properly at this level.",
  rationalesIncorrect: {
    B: "The sacrococcygeal joint is posterior and lower in the pelvis, not the usual site of deep transverse arrest.",
    C: "The iliac spines are part of the pelvis but are not the landmark involved in deep transverse arrest."
  }
},

{
  question: "A Para 4 mother with a 6-month-old baby reports irregular menstruation after delivery. If she is breastfeeding, this is most likely due to:",
  options: {
    A: "High level of prolactin",
    B: "Complication of labour",
    C: "Hormonal imbalance"
  },
  correctAnswer: "A",
  rationaleCorrect: "During breastfeeding, prolactin remains high and can suppress ovulation. This may cause absent or irregular menstruation during the postpartum period.",
  rationalesIncorrect: {
    B: "Irregular menstruation after delivery is usually hormonal, not automatically a labour complication.",
    C: "Hormonal imbalance is too general. The specific hormone commonly responsible during breastfeeding is prolactin."
  }
},

{
  question: "A 32-year-old G4P2 at 35 weeks reports decreased fetal movement. The non-stress test is reactive, and ultrasound shows reassuring fetal tone, breathing, movement, and amniotic fluid status. What is the next step?",
  options: {
    A: "Induction of labour",
    B: "Reassure, rest, and follow-up",
    C: "Follow-up evaluation of the percentile of amniotic fluid"
  },
  correctAnswer: "B",
  rationaleCorrect: "A reactive non-stress test with reassuring fetal tone, breathing, movement, and amniotic fluid assessment suggests that the foetus is currently well. The appropriate step is reassurance, rest, follow-up, and advice to return if fetal movements reduce again.",
  rationalesIncorrect: {
    A: "Induction is not indicated when fetal assessment is reassuring at 35 weeks.",
    C: "Amniotic fluid has already been assessed as part of the evaluation. If it is normal, reassurance and follow-up are appropriate."
  }
},

{
  question: "Squatting during the second stage of labour facilitates delivery because:",
  options: {
    A: "Socially, it is the accepted posture",
    B: "The woman feels more comfortable",
    C: "There is an increase in the outlet dimension"
  },
  correctAnswer: "C",
  rationaleCorrect: "Squatting during the second stage can increase pelvic outlet dimensions and use gravity to assist descent and delivery of the baby.",
  rationalesIncorrect: {
    A: "Social acceptance may vary, but the clinical reason is improved pelvic outlet space.",
    B: "Comfort may be a benefit, but the main obstetric advantage is increased outlet dimension."
  }
},

{
  question: "A puerperal mother asks where milk is stored in the breast. What is the best description?",
  options: {
    A: "A central duct into which the tubules run",
    B: "Small ducts which connect the alveoli",
    C: "Widened-out portions beneath the areola"
  },
  correctAnswer: "C",
  rationaleCorrect: "Milk is stored temporarily in widened areas of the lactiferous ducts known as lactiferous sinuses or ampullae, located beneath the areola.",
  rationalesIncorrect: {
    A: "This describes a duct pathway but not the main milk storage area.",
    B: "Small ducts transport milk from the alveoli but are not the main storage area."
  }
},

{
  question: "A pregnant woman has raised alpha-fetoprotein in the amniotic fluid. Which condition is not typically indicated by this finding?",
  options: {
    A: "Anencephaly",
    B: "Spina bifida",
    C: "Turner's syndrome"
  },
  correctAnswer: "C",
  rationaleCorrect: "Raised alpha-fetoprotein is associated with open neural tube defects such as anencephaly and spina bifida. Turner's syndrome is a chromosomal disorder and is not classically associated with raised amniotic fluid alpha-fetoprotein.",
  rationalesIncorrect: {
    A: "Anencephaly is an open neural tube defect and can cause raised alpha-fetoprotein.",
    B: "Open spina bifida can also cause raised alpha-fetoprotein."
  }
},

{
  question: "A baby develops jaundice on the third postnatal day. What is the common explanation for this jaundice?",
  options: {
    A: "Medication taken by the mother",
    B: "Exposure to morning sun",
    C: "Increased red blood cell breakdown"
  },
  correctAnswer: "C",
  rationaleCorrect: "Physiological jaundice commonly appears after the first 24 hours and may peak around day 3–5. It occurs because newborns have increased red blood cell breakdown and an immature liver that clears bilirubin slowly.",
  rationalesIncorrect: {
    A: "Some medicines may affect newborns, but this is not the common explanation for jaundice on day 3.",
    B: "Exposure to morning sun does not cause neonatal jaundice."
  }
},

{
  question: "A 34-year-old G1P0 at 31 weeks presents with painful contractions every 5 minutes. There is no vaginal bleeding, leakage of fluid, or discharge, and fetal movement is good. What is the best management?",
  options: {
    A: "Refer her to the gynaecologist",
    B: "Administer intravenous ampicillin and gentamicin",
    C: "Administer intravenous infusion"
  },
  correctAnswer: "A",
  rationaleCorrect: "Painful contractions at 31 weeks suggest possible preterm labour. She needs urgent assessment by the obstetric or gynaecology team for confirmation of labour, fetal assessment, and possible interventions such as corticosteroids, tocolysis, magnesium sulfate, or antibiotics if indicated.",
  rationalesIncorrect: {
    B: "Antibiotics are not automatically indicated because there is no clear evidence of infection, ruptured membranes, or chorioamnionitis in the stem.",
    C: "Intravenous fluids alone do not adequately manage possible preterm labour."
  }
},

{
  question: "A newborn has caput succedaneum after delivery. How should this be explained to the mother?",
  options: {
    A: "It is a swelling that does not cross a suture line but pits on pressure",
    B: "It is a swelling located at the base of the hairline due to excessive pressure in the birth canal",
    C: "It is a swelling of the scalp caused by pressure from the uterus or vaginal wall during delivery"
  },
  correctAnswer: "C",
  rationaleCorrect: "Caput succedaneum is swelling of the newborn's scalp caused by pressure during labour and delivery. It is typically soft, may pit on pressure, and can cross suture lines.",
  rationalesIncorrect: {
    A: "This is incorrect because caput succedaneum can cross suture lines. A swelling that does not cross suture lines is more suggestive of cephalhaematoma.",
    B: "Caput is usually on the presenting part of the scalp, not specifically at the base of the hairline."
  }
},

{
  question: "A 30-week pregnant multigravida complains of severe pain when walking. What is the most likely explanation?",
  options: {
    A: "She may be having a malpresenting baby",
    B: "Overstretching of the ligaments due to the effect of relaxin",
    C: "Pressure from the presenting part on the sacrum"
  },
  correctAnswer: "B",
  rationaleCorrect: "During pregnancy, relaxin and other hormonal changes loosen pelvic ligaments. In a multigravida, this may cause pelvic girdle pain or difficulty walking, especially in late pregnancy.",
  rationalesIncorrect: {
    A: "Malpresentation does not usually present mainly as severe pain when walking.",
    C: "Pressure from the presenting part on the sacrum may cause discomfort later in pregnancy or labour, but the ligament-stretching effect of relaxin better explains walking pain."
  }
},

{
  question: "A 10-week pregnant woman presents with frequency of micturition and dysuria. What should the midwife anticipate?",
  options: {
    A: "Warm sitz bath will solve her problem",
    B: "There is a urinary infection",
    C: "Frequency of micturition is normal in the first trimester"
  },
  correctAnswer: "B",
  rationaleCorrect: "Frequency of micturition can be normal in early pregnancy, but the presence of dysuria suggests urinary tract infection. She should be assessed and managed appropriately.",
  rationalesIncorrect: {
    A: "A warm sitz bath may provide comfort for some perineal symptoms but will not treat a urinary infection.",
    C: "Frequency alone can be normal in the first trimester, but dysuria makes infection more likely."
  }
},

{
  question: "A 29-week pregnant woman ate a sandwich made with meat contaminated with E. coli. She is asymptomatic with no fever, chills, body aches, or contractions. What is the next best step?",
  options: {
    A: "Blood and stool cultures with treatment if positive",
    B: "Stool cultures and treatment",
    C: "No testing or treatment unless she develops symptoms"
  },
  correctAnswer: "C",
  rationaleCorrect: "Since she is asymptomatic, there is no need for immediate testing or treatment. She should be reassured, educated to observe for symptoms such as diarrhoea, fever, abdominal cramps, vomiting, or contractions, and told to report immediately if they occur.",
  rationalesIncorrect: {
    A: "Blood and stool cultures with treatment are unnecessary when she has no symptoms.",
    B: "Stool cultures and treatment should not be started just because of exposure without symptoms or positive clinical findings."
  }
},

{
  question: "A baby is suspected to have Horner's syndrome. Which of the following findings is not used to confirm the diagnosis?",
  options: {
    A: "Drooping eyelid",
    B: "Swelling on the affected part",
    C: "Constriction of pupil"
  },
  correctAnswer: "B",
  rationaleCorrect: "Horner's syndrome is associated with drooping of the eyelid and constriction of the pupil on the affected side. Swelling is not a typical feature.",
  rationalesIncorrect: {
    A: "Drooping eyelid, also called ptosis, is a classic sign of Horner's syndrome.",
    C: "Constriction of the pupil, also called miosis, is another classic sign of Horner's syndrome."
  }
},

{
  question: "A postnatal mother complains of leakage of urine although she does not feel any urge to urinate. What is the most likely diagnosis?",
  options: {
    A: "True incontinence",
    B: "Stress incontinence",
    C: "Acute incontinence"
  },
  correctAnswer: "A",
  rationaleCorrect: "True incontinence refers to continuous or involuntary leakage of urine without the normal urge to urinate. The key clue is that she leaks urine even though she does not feel the urge.",
  rationalesIncorrect: {
    B: "Stress incontinence occurs during coughing, sneezing, laughing, or lifting due to increased abdominal pressure.",
    C: "Acute incontinence is not the best classification for painless leakage without urge in this context."
  }
},

{
  question: "A sexually active woman presents with mild lower abdominal pain, fever, cervical tenderness, uterine and adnexal tenderness, mucopurulent vaginal discharge, elevated inflammatory markers, and gram-negative diplococci on culture. What is the most likely diagnosis?",
  options: {
    A: "Cervical dysplasia",
    B: "Tubo-ovarian abscess",
    C: "Acute salpingitis"
  },
  correctAnswer: "C",
  rationaleCorrect: "The symptoms suggest pelvic inflammatory disease involving the fallopian tubes. Lower abdominal pain, fever, cervical motion tenderness, adnexal tenderness, mucopurulent discharge, and gonococcal infection all support acute salpingitis.",
  rationalesIncorrect: {
    A: "Cervical dysplasia is a precancerous cervical change and does not usually present with fever, pelvic tenderness, and purulent discharge.",
    B: "Tubo-ovarian abscess is a more severe complication of pelvic inflammatory disease and is usually associated with a pelvic mass or severe illness, which is not stated here."
  }
},

{
  question: "Which two signs best support a diagnosis of Down's syndrome in a newborn?",
  options: {
    A: "Clenched fist with overriding fingers",
    B: "Short sternum and club feet",
    C: "Short neck with flattened facial features"
  },
  correctAnswer: "C",
  rationaleCorrect: "Down's syndrome commonly presents with features such as flat facial profile, short neck, upward slanting eyes, low muscle tone, and single palmar crease.",
  rationalesIncorrect: {
    A: "Clenched fist with overriding fingers is more typical of Edwards syndrome.",
    B: "Short sternum and club feet are also more suggestive of Edwards syndrome rather than Down's syndrome."
  }
},

{
  question: "What is the best period to prepare mothers for exclusive breastfeeding?",
  options: {
    A: "Antenatal period",
    B: "Puberty",
    C: "Postpartum period"
  },
  correctAnswer: "A",
  rationaleCorrect: "The antenatal period is the best time to prepare mothers for breastfeeding. Education before delivery helps mothers understand exclusive breastfeeding, positioning, attachment, milk production, and common breastfeeding challenges.",
  rationalesIncorrect: {
    B: "Puberty is too early and not the practical period for preparing a pregnant woman for breastfeeding.",
    C: "Breastfeeding support continues after delivery, but preparation should begin before birth."
  }
},

{
  question: "A student midwife puts the placenta aside after delivery, cleans the mother, and congratulates her. What should the observer prompt her to do?",
  options: {
    A: "Congratulate her for her swiftness in cleaning and making the woman comfortable",
    B: "Prompt her that the placenta was not inspected",
    C: "Prompt her that she did not ask the woman to empty her bladder"
  },
  correctAnswer: "B",
  rationaleCorrect: "After the placenta is delivered, it must be inspected for completeness of the lobes and membranes. Failure to inspect the placenta may lead to missed retained placental tissue, which can cause postpartum haemorrhage or infection.",
  rationalesIncorrect: {
    A: "Comfort is important, but she omitted a critical safety step.",
    C: "Emptying the bladder is important, but the immediate omitted action after placental delivery is placental inspection."
  }
},

{
  question: "During antenatal assessment, a bulging is observed when the client bears down. What is the most likely explanation?",
  options: {
    A: "It is a normal expectation of the perineum when there is pressure from within",
    B: "The woman has weak perineal floor muscles",
    C: "Based on the woman's weight, it may be normal"
  },
  correctAnswer: "B",
  rationaleCorrect: "Bulging on bearing down suggests weakness of the pelvic floor muscles. Weak pelvic support may predispose the woman to prolapse or urinary incontinence.",
  rationalesIncorrect: {
    A: "Bulging during assessment should not be dismissed as normal.",
    C: "Weight may contribute to pelvic floor strain, but the direct explanation is weak pelvic floor muscles."
  }
},

{
  question: "A midwife teaches students to place the baby on the mother's abdomen immediately after birth. This is done to: I. Ensure that the mother sees the baby first. II. See if the curve of Carus is not straightened. III. Prevent injury to the perineum.",
  options: {
    A: "I only",
    B: "II and III",
    C: "I and II"
  },
  correctAnswer: "C",
  rationaleCorrect: "Placing the baby on the mother's abdomen immediately after birth allows the mother to see and receive the baby early. In delivery technique, the baby should also be handled in a way that follows the normal pelvic curve rather than being pulled improperly.",
  rationalesIncorrect: {
    A: "This is partly correct, but it does not include the delivery technique consideration.",
    B: "Preventing perineal injury is mainly related to controlled delivery of the head and shoulders, not simply placing the baby on the abdomen after delivery."
  }
},

{
  question: "Which functioning part of the ovary contains ovarian follicles at different stages of development and is surrounded by stroma?",
  options: {
    A: "Medulla",
    B: "Ampulla",
    C: "Cortex"
  },
  correctAnswer: "C",
  rationaleCorrect: "The ovarian cortex contains ovarian follicles at different stages of development. It lies beneath the outer surface and is supported by ovarian stroma.",
  rationalesIncorrect: {
    A: "The medulla is the central part of the ovary containing blood vessels, nerves, and connective tissue, but it is not the main follicle-containing area.",
    B: "The ampulla is part of the fallopian tube, not the ovary."
  }
},

{
  question: "A woman in the first stage of labour asks what she can do to prevent pelvic floor trauma. Which actions are appropriate? I. Empty bladder every hour. II. Adopt kneeling position when there is the urge to bear down. III. Perform pelvic floor exercises. IV. Lie on her side when there is the urge to bear down.",
  options: {
    A: "I, II and IV",
    B: "I, II and III",
    C: "I, III and IV"
  },
  correctAnswer: "C",
  rationaleCorrect: "Emptying the bladder prevents obstruction to fetal descent and reduces pressure on pelvic tissues. Pelvic floor exercises strengthen the muscles, and lying on the side when there is an urge to bear down can help reduce unnecessary pressure and trauma during the first stage.",
  rationalesIncorrect: {
    A: "This includes kneeling with the urge to bear down, but early bearing down in the first stage should be discouraged because it may cause cervical swelling and pelvic floor trauma.",
    B: "This also includes kneeling with the urge to bear down and excludes side-lying, which can help reduce unnecessary pressure."
  }
},

{
  question: "Where are the living ligatures located?",
  options: {
    A: "Vagina",
    B: "Uterus",
    C: "Uterine"
  },
  correctAnswer: "B",
  rationaleCorrect: "The living ligatures refer to the interlacing muscle fibres of the uterus. After delivery, these fibres contract and compress the blood vessels to control bleeding.",
  rationalesIncorrect: {
    A: "The vagina does not contain the uterine muscle fibres known as living ligatures.",
    C: "Uterine is an adjective, not the correct anatomical location."
  }
},

{
  question: "Moulding is a protective mechanism of the delicate fetal brain. When moulding occurs, all the following happen except:",
  options: {
    A: "Elongation of the area at right angle",
    B: "No change occurs in the size of the hand",
    C: "Change in the shape of the fetal head"
  },
  correctAnswer: "B",
  rationaleCorrect: "Moulding refers to changes in the shape of the fetal head as the skull bones overlap during labour. It affects the fetal head, not the hand.",
  rationalesIncorrect: {
    A: "Moulding can cause alteration and elongation of the fetal head shape.",
    C: "Change in the shape of the fetal head is exactly what happens during moulding."
  }
},

{
  question: "A 2-week-old baby has a small painless swelling on the neck after excessive traction or twisting during labour. What is the likely diagnosis?",
  options: {
    A: "Erb's palsy",
    B: "Wry neck",
    C: "Bell's palsy"
  },
  correctAnswer: "B",
  rationaleCorrect: "A painless swelling in the neck after difficult delivery or excessive traction may be due to injury of the sternocleidomastoid muscle, leading to congenital muscular torticollis, also called wry neck.",
  rationalesIncorrect: {
    A: "Erb's palsy affects the upper brachial plexus and presents with weakness or paralysis of the shoulder and arm.",
    C: "Bell's palsy affects the facial nerve and causes facial weakness, not a neck swelling."
  }
},

{
  question: "A 38-year-old woman with a mechanical mitral valve and chronic atrial fibrillation has excessive intermenstrual uterine bleeding. She has completed childbearing. What is the best treatment option?",
  options: {
    A: "Hysterectomy",
    B: "Depo-Provera",
    C: "Endometrial ablation"
  },
  correctAnswer: "C",
  rationaleCorrect: "Endometrial ablation is suitable for women with heavy abnormal uterine bleeding who have completed childbearing. It is less invasive than hysterectomy and avoids major surgery in a patient with significant cardiac disease.",
  rationalesIncorrect: {
    A: "Hysterectomy is effective but carries higher surgical and anaesthetic risk, especially in a patient with a mechanical valve and atrial fibrillation.",
    B: "Depo-Provera may reduce bleeding in some women, but in this case she has completed childbearing and needs a more definitive non-major surgical option."
  }
},

{
  question: "A 38-year-old G1P0 at 12 weeks has a desired pregnancy and a positive cell-free fetal DNA result for trisomy 16. What is the most appropriate next step?",
  options: {
    A: "Repeat cell-free fetal DNA screening",
    B: "Chorionic villus sampling",
    C: "Termination of pregnancy"
  },
  correctAnswer: "B",
  rationaleCorrect: "Cell-free fetal DNA is a screening test, not a diagnostic test. A positive result should be confirmed with diagnostic testing. At 12 weeks, chorionic villus sampling is an appropriate diagnostic option.",
  rationalesIncorrect: {
    A: "Repeating another screening test does not confirm the diagnosis.",
    C: "The pregnancy is desired, and termination should not be considered based on a screening result alone."
  }
},

{
  question: "A pregnant woman has vulval varicose veins. Which explanation is most appropriate?",
  options: {
    A: "There is relaxation of the blood vessels",
    B: "Diabetes",
    C: "Sitting down for a long period"
  },
  correctAnswer: "A",
  rationaleCorrect: "Pregnancy hormones relax the walls of blood vessels, and the growing uterus increases pressure on pelvic veins. These changes can lead to vulval varicosities.",
  rationalesIncorrect: {
    B: "Diabetes is not a direct common cause of vulval varicose veins in pregnancy.",
    C: "Prolonged sitting may worsen venous pooling, but pregnancy-related vascular relaxation is the better answer."
  }
},

{
  question: "A breastfeeding mother one day after delivery has fever, cough, cold, loss of appetite, and muscle aches. What is the best option for mother and child if the mother is stable?",
  options: {
    A: "Carry out laboratory investigation",
    B: "Conservative management of symptoms",
    C: "Maternal-neonatal separation"
  },
  correctAnswer: "B",
  rationaleCorrect: "The symptoms suggest a flu-like illness. If the mother is stable, she can continue breastfeeding with good hand hygiene, cough etiquette, and supportive care. Routine separation of mother and baby is not the best option unless the mother is severely ill or there is a specific infection-control indication.",
  rationalesIncorrect: {
    A: "Investigations may be needed if symptoms are severe or diagnosis is unclear, but the best general option here is supportive management while continuing breastfeeding safely.",
    C: "Separation is usually avoided because breastfeeding and bonding are important, and infection prevention measures can be used."
  }
},

{
  question: "A fair-coloured petite primigravida weighing 48 kg comes for ANC booking. Which type of pelvis is she most likely to have?",
  options: {
    A: "Anthropoid",
    B: "Justo minor",
    C: "Platypelloid"
  },
  correctAnswer: "B",
  rationaleCorrect: "A petite woman with low body weight may have a generally small but normally shaped pelvis. This is described as a justo minor pelvis.",
  rationalesIncorrect: {
    A: "An anthropoid pelvis has a long anteroposterior diameter and is not mainly described by small body size.",
    C: "A platypelloid pelvis is flat with a shortened anteroposterior diameter, not simply a small pelvis."
  }
},

{
  question: "A ruptured tubal pregnancy is an obstetric emergency because the woman can die from hypovolaemic shock. This is mainly because:",
  options: {
    A: "The fallopian tubes are mainly made up of blood vessels",
    B: "The uterine and ovarian arteries provide a rich blood supply during pregnancy",
    C: "Ruptured ectopic pregnancy inhibits venous return"
  },
  correctAnswer: "B",
  rationaleCorrect: "The fallopian tube receives blood supply from branches of the uterine and ovarian arteries. When a tubal pregnancy ruptures, severe internal bleeding may occur, leading to hypovolaemic shock.",
  rationalesIncorrect: {
    A: "This is anatomically incorrect. The fallopian tubes contain muscular, mucosal, and connective tissue layers, not mainly blood vessels.",
    C: "The major danger is haemorrhage, not inhibition of venous return."
  }
},

{
  question: "A 12-week pregnant woman has acute retention of urine, and ultrasound shows a retroverted uterus. What is the best management?",
  options: {
    A: "Terminate the pregnancy because the uterus cannot rise out of the hollow of the sacrum",
    B: "Prepare the client for surgery to reposition the uterus in the anteverted position",
    C: "Pass a urethral catheter to drain the urine, and the uterus will rise out of the pelvis"
  },
  correctAnswer: "C",
  rationaleCorrect: "A retroverted gravid uterus can cause urinary retention around the end of the first trimester. The immediate management is bladder drainage with a urethral catheter. As pregnancy progresses, the uterus usually rises out of the pelvis.",
  rationalesIncorrect: {
    A: "Termination of pregnancy is not indicated.",
    B: "Surgery is not the first-line management."
  }
},

{
  question: "Which advice is suitable for a mother whose baby has diaper rash? I. Wash and dry the soiled area. II. Change diaper when soiled. III. Expose the rash to air. IV. Apply baby powder to the rash.",
  options: {
    A: "II, III and IV",
    B: "I, II and III",
    C: "I and II"
  },
  correctAnswer: "B",
  rationaleCorrect: "Diaper rash care includes keeping the area clean and dry, changing diapers promptly when soiled, and exposing the area to air when possible. These reduce moisture and irritation.",
  rationalesIncorrect: {
    A: "This includes baby powder, which is not recommended because it may irritate the skin and can be inhaled by the baby.",
    C: "Washing, drying, and changing diapers are correct, but exposing the rash to air is also helpful."
  }
},

{
  question: "What is the best medication to apply to the newborn cord before discharge?",
  options: {
    A: "Methylated spirit",
    B: "Chlorhexidine",
    C: "Alcohol rub"
  },
  correctAnswer: "B",
  rationaleCorrect: "Chlorhexidine is commonly recommended for newborn cord care because it helps reduce bacterial contamination and prevents cord infection, especially in settings where infection risk is significant.",
  rationalesIncorrect: {
    A: "Methylated spirit has been used traditionally, but chlorhexidine is preferred for cord infection prevention.",
    C: "Alcohol rub is mainly used for hand hygiene and is not the best medication for newborn cord care."
  }
},
];