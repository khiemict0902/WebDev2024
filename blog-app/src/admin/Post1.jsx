import './Post1.css';
import React, { useState, useEffect } from 'react'; // Import useState
import NavBar from '../components/NavBar';


function Post() {
    return (
        <>
            <div lang="en">
                <head>
                    <title>Post1</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
        
                <body className="post_layout-post">
                    <div className="post_site-content">
                        <div className="post_container">
                            {/* Site Title */}
                            <div className="post_main-title">
                                <h1 className="text-title">UX design isn't dead, you're just confused</h1>
                                <p className="post_lead">Get with the times.</p>
                            </div>
        
                            {/* Content */}
                            <div className="post_main-content">
                                {/* Begin Article */}
                                    <div className="container">
                                        <div className="post_row">
                                            {/* Post Share */}
                                            <div className="post_share">
                                                <p>Share</p>
                                            </div>
                                            {/* Post */}
                                            <div className="post_post">
                                                <div className="post_mainheading">
                                                    {/* Author Box */}
                                                    <div className="post_info">
                                                        <div className="post_re-img">
                                                            <img src="" alt="avatar" className="post_image"/>
                                                        </div>
                                                        <div className="post_text">
                                                            <p>Meghan Logan</p>
                                                            <div>Published in UX Collective</div>  
                                                        </div>
                                                    </div>
                                                    {/* Post Title */}
                                                </div>
                                                <img src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article" alt="code"/>
                                        
                                                {/* Post Content */}
                                                <div className="post_article-post">  
                                                    <h1>What is healthcare technology?</h1>

                                                    <p>Healthcare technology is any technology, including medical devices, IT systems, algorithms, artificial intelligence (AI), cloud and blockchain, designed to support healthcare organizations.</p>

                                                    <h3>How is healthcare technology applied?</h3>
                                                    <p>From massive diagnostic imaging scanners to tiny wearable sensors, technology is an integral part of modern healthcare. In addition to new treatments and medical procedures, technology has improved many healthcare business processes as well. Many people have come to enjoy the conveniences of scheduling appointments online, accessing test results and records with just a few clicks, or sending questions to their providers through email or text.<br/>
                                                    Here are just a few examples of the areas in which healthcare technology innovations are supporting the next wave of advances in healthcare:</p>

                                                    <h3>Disease diagnosis and treatment</h3>
                                                    <p>Using AI to process data, like medical images, and develop disease models can potentially help clinicians make diagnoses with more precision. For example, recent work from IBM Research has show that AI can be used to recognize and interpret brain activity patterns in MRIs to track the progression of neurodegenerative illnesses, such as Huntington's disease.</p>

                                                    <h3>Medical imaging</h3>
                                                    <p>Computers and AI models are particularly valuable in medical imaging because they can help turn pictures into numbers and detect trends. These innovations can help radiologists and other clinicians manage the incredibly large volume of images they have to review by identifying high-value findings and bringing anomalies to their attention.</p>

                                                    <h3>Healthcare operations</h3>
                                                    <p>Many hospitals and healthcare systems are starting to build on improvements they've seen with electronic medical records and find other ways to systematically improve their operations. Cloud technology, analytics and mobile technology are just a few of the technologies organizations are using to optimize their digital infrastructure.</p>

                                                    <h3>Clinical research</h3>
                                                    <p>Life sciences organizations are using technology to transform how clinical trials are being performed. Smart devices, telehealth visits and sensors are being used to support decentralized trials that make data collection more efficient and convenient for the people who participate.</p>

                                                    <h1>How technology has changed healthcare</h1>

                                                    <p>Many innovative leaps in health technology have been made in the centuries people have been practicing medicine, yet few have had as much widespread influence or impact as digital technology. Dramatic improvements in networking and computers have not only expanded options for medical treatments but have also transformed how clinicians perform their jobs.<br/>

                                                    Although forward thinkers started discussing the possibility of using computers in medicine as early as the 1960s (link resides outside ibm.com), computers were initially too expensive and unreliable for medical practices to rely on. As technology improved and costs came down, policies and data standards (link resides outside ibm.com) were created to encourage healthcare organizations to adopt new technology not just for medical equipment, like diagnostic imaging machines, but also for everyday record keeping. Paper medical records were digitized and mostly replaced with electronic health records (EHRs) that help make it easier for health data like test results or diagnoses to be accessed efficiently and securely.<br/>

                                                    Using EHR systems or other technologies while engaging with patients and creating treatment plans is now standard practice. Laptops and tablets have become just as common in healthcare settings as stethoscopes, and there's growing evidence that EHRs are having a positive effect on accessing and exchanging health information.<br/>

                                                    However, one large challenge EHRs have created is the accumulation of large amounts of unintegrated and unstandardized data. Currently, most healthcare organizations have a wealth of data they could use to improve their procedures and business practices, but they might not have the tools or expertise to uncover insights in that data. Newer technologies, like cloud, blockchain and AI tools based on machine learning, can help healthcare organizations uncover patterns in large amounts of data while also making that data more secure and easier to manage.<br/>

                                                    As the healthcare industry faces new challenges, technology solutions are helping leaders to improve performance, increase collaboration across systems and manage costs. As demands on organizations increase, healthcare technology can streamline processes, automate tasks and improve workflows at a scale that's not possible for humans alone. As providers at hospitals and health systems embrace value-based health reimbursement models, these solutions are helping healthcare professionals to improve patient care, create better experiences and reduce burnout.</p>

                                                    <h1>Benefits of technology in healthcare</h1>

                                                    <h3>Improving patient care and experiences</h3>
                                                    <p>Using technology to measure and capture data across the whole system of patient care gives health organizations a big-picture view of how they're performing. Technology also helps to automate that measurement so organizations can continuously review their results, spot issues that need to be fixed and uncover ways to enhance care and the patient experience.</p>

                                                    <h3>Real-time information exchange</h3>
                                                    <p>From clinicians to patients to payers, many different groups need to be able to access health records for different reasons. Traditionally, organizations have had to maintain different records for each group. But with new technology that makes it easier for digital patient records to be standardized and stored securely, more organizations are integrating their data so that authorized people can access the records they need at the time they need them.</p>

                                                    <h3>Flexibility for patients and clinicians</h3>
                                                    <p>Patients are busy and finding time for appointments can be a struggle. Telemedicine technology and patient portals provide more ways for people to communicate with health professionals. Wearable technology, like heart monitors, also gives clinicians more ways to evaluate the well-being of their patients and provides them with more options to record and evaluate symptoms as patients go about their lives.</p>

                                                    <h1>AI technology in healthcare</h1>
                                                    <p>Many current efforts to incorporate artificial intelligence in healthcare are focused on clinical-decision support and uncovering useful insights from large collections of data. Healthcare organizations have accumulated so much data that it would be impossible to analyze it without AI.<br/>
                                                    AI-enabled tools can sift through the large and complex data sets generated from electronic records, notes, images, sensors and devices to find trends that could improve patient care and help researchers develop better treatments for medical conditions. Although AI technology is still relatively new, there are many use cases that could benefit organizations across the healthcare industry.</p>

                                                    <h1>Blockchain in healthcare</h1>
                                                    <p>Blockchain technology in the healthcare industry offers a user-centered way for health information to be securely gathered, verified and shared. Most blockchain systems provide a transparent, distributed ledger of records that cannot be changed without the changes being recorded. The technology can be used to anonymize and safeguards patient data while also providing full transparency and interoperability across diverse, distributed and highly fragmented healthcare systems.</p>
                                                    <img src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/f9/42/586-vaccine-106.component.crop-16by9-xl.ts=1728679260294.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/table_of_contents/body-article-8/image" alt="img" />

                                                    <h1>Cloud computing in healthcare</h1>
                                                    <p>When most people think of cloud technology, they think of the cloud as a place to store data. Yet cloud environments do more than passive data storage. Cloud environments offer ways for healthcare organizations to build and customize applications that can automate how data moves through their information technology systems.<br/>
                                                    Hybrid cloud environments in particular offer security features that can help organizations maintain compliance with HIPAA and other regulations while giving them the flexibility they need to move data around to where it needs to go. This flexibility also provides healthcare providers with more options for updating existing legacy systems and workflows. Cloud adoption opens up opportunities for organizations to use AI and machine learning tools too, which can help uncover hidden patterns and insights that improve how care is delivered.</p>

                                                    <h1>Telehealth technology</h1>
                                                    <p>During the COVID19 pandemic, many providers pivoted to offering appointments through telemedicine. Many payers also adapted to these changes by offering equitable reimbursement for telemedicine and providing better billing options.<br/>
                                                    Even after the pandemic subsides, the technology ecosystem that supports telemedicine will most likely persist due to the convenience and flexibility it provides. Patients, especially people who live in remote locations or who work outside of traditional business hours, appreciate having more options for connecting with clinicians whether they're using video software on a computer or a mobile app on their phones.</p>

                                                    <img src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/others/ab/64/ab64b6ee-205c-4e45-b8c678907c5fa91f.component.crop-16by9-xl.ts=1728679260538.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/table_of_contents/body-article-8/image_298681703" alt="img"/>

                                                    <h1>Driving interoperability through technology</h1>
                                                    <p>Interoperability, which is a seamless exchange of data across systems and organizations, is crucial for driving digital transformation in the healthcare industry. It creates benefits for patients and providers by making relevant data easier to access without sacrificing security or privacy. When clinicians have to do less work to find the information they need, they have more time to focus on making the best decisions for their patients. Additionally, healthcare interoperability can lower the total cost of care by reducing the number of unnecessary or repeated tests as well as helping clinicians make diagnoses sooner.</p>
                                                </div>
                                            </div>
                                            {/* End Post */}
                                        </div>
                                    </div>
                                {/* End Article */}
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </>
    );
}

export default Post