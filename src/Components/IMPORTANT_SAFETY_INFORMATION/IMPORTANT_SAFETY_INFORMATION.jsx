import React from 'react'

const IMPORTANT_SAFETY_INFORMATION = () => {
  return (
    <div class="container  w-[80%] mt-5 list-disc marker:text-list_color text-[18px] font-[300] tracking-[0.09px]  list-outside leading-[20px]">
    <div class="bg-white  ">
      <h3 class="text-xl font-[500] mb-3 text-dark_green">IMPORTANT SAFETY INFORMATION</h3>
      <p class="font-medium mb-2">
        ORSERDU may cause serious side effects, including:
      </p>
      <ul class="list-disc list-inside mb-4  ">
        <li>
          Increased fat (lipid) levels in your blood (hypercholesterolemia
          and hypertriglyceridemia). Your healthcare provider will do blood
          tests to check your lipid levels before and during your treatment
          with ORSERDU.
        </li>
      </ul>
      <p class="font-medium mb-2">
        Before taking ORSERDU, tell your healthcare provider about all your
        medical conditions, including if you:
      </p>
      <ul class="list-disc list-inside mb-4 flex flex-col gap-2">
        <li>Have liver problems</li>
        <li>
          Are pregnant or plan to become pregnant. ORSERDU can harm your
          unborn baby.
        </li>
        <ul class=" list-disc list-outside ml-8 flex flex-col gap-2 ">
          <p class="font-medium mb-2 mt-2 m">
            Females who are able to become pregnant:
          </p>
          <li className="ml-6" >
            Your healthcare provider may do a pregnancy test before you
            start treatment with ORSERDU.
          </li>
          <li className="ml-6" >
            You should use effective birth control during treatment with
            ORSERDU and for 1 week after the last dose.
          </li>
          <li className="ml-6" >
            Tell your healthcare provider right away if you become pregnant
            or think you may be pregnant during treatment with ORSERDU.
          </li>
          <p class="font-medium mb-2 mt-2">
            Males with female partners who are able to become pregnant:
          </p>
          <li className="ml-6" >
            You should use effective birth control during treatment with
            ORSERDU and for 1 week after the last dose.
          </li>
        </ul>
      </ul>
      <ul class="list-disc list-inside mb-4 flex flex-col gap-2 text-start">
        <li>
          Are breastfeeding or plan to breastfeed. It is not known if
          ORSERDU passes into your breast milk. Do not breastfeed during
          treatment with ORSERDU and for 1 week after the last dose.
        </li>
      </ul>
      <p class="mb-4">
        <span className="font-medium  ">Tell your healthcare provider about all the medicines you take,</span>
        including prescription and over-the-counter medicines, vitamins, and
        herbal supplements. ORSERDU and other medicines may affect each
        other causing side effects. Know the medicines you take. Keep a list
        of them to show your healthcare provider or pharmacist when you get
        a new medicine.
      </p>
      <p class="font-medium mb-2">
        The most common side effects of ORSERDU include:
      </p>
      <div className="grid grid-cols-2 gap-1 ">
      <ul class="list-disc list-inside grid grid-cols-1 gap-1 mb-4">
        <li>Muscle and joint (musculoskeletal) pain</li>
        <li>Nausea
          
        </li>
        <li>Increased cholesterol and triglyceride levels in your blood</li>
        <li>Increased liver function tests</li>
        <li>Tiredness</li>
        <li>Decreased red blood cell counts</li>
        <li>Vomiting</li>
        <li>Decreased salt (sodium) levels in your blood</li>
        
      </ul>
      <ul className="list-disc list-inside grid grid-cols-1 gap-1 mb-4">
        
        <li>Increased kidney function test</li>
        <li>Decreased appetite</li>
        <li>Diarrhea</li>
        <li>Headache</li>
        <li>Constipation</li>
        <li>Stomach-area (abdominal) pain</li>
        <li>Hot flush</li>
        <li>Indigestion or heartburn</li></ul>
        </div>
      <p class="mb-4">
        Your healthcare provider may decrease your dose, temporarily stop,
        or completely stop treatment with ORSERDU, if you develop certain
        side effects.
      </p>
      <p class="font-medium mb-4">
        ORSERDU may affect fertility in males and in females who are able to
        become pregnant. Talk to your healthcare provider if this is a
        concern for you.
      </p>
      <p class="mb-4">
        ORSERDU is available as 345 mg tablets and 86 mg tablets.
      </p>
      <p class="mb-4">
        These are not all the possible side effects of ORSERDU. Call your
        doctor for medical advice about side effects. You may report side
        effects to the FDA at 1-800-FDA-1088 or visit 
          <a
          class="text-dark_green ml-2 underline"
          href="http://www.fda.gov/medwatch"
          target="_blank"
        >
           www.fda.gov/medwatch
        </a>
        .
      </p>
      <h3 class="text-xl font-medium mb-4 text-dark_green">INDICATION</h3>
      <p class="mb-4">
        ORSERDU (elacestrant) is a prescription medicine to treat women who
        have gone through menopause and adult men with estrogen receptor
        (ER)-positive, human epidermal growth factor receptor 2
        (HER2)-negative, ESR1-mutated advanced breast cancer or breast
        cancer that has spread to other parts of the body (metastatic),{" "}
        <strong>and</strong> whose disease has progressed after endocrine
        therapy.
      </p>
      <p class="mb-4">
        Your healthcare provider will perform a test to make sure that
        ORSERDU is right for you.
      </p>
      <p class="mb-4">
        It is not known if ORSERDU is safe and effective in children.
      </p>
      <p class="font-medium text-[18px] mt-4">
        Please see full{" "}
        <a class="underline" href="http://pi.orserdu.com" target="_blank">
          Prescribing Information
        </a>
        , including{" "}
        <a
          class="underline"
          href="https://rxmenarinistemline.com/United%20States%20Patient%20Package%20Insert%20Approved.pdf"
          target="_blank"
        >
          Patient Information
        </a>
        , for ORSERDU.
      </p>
    </div>
  </div>
  )
}

export default IMPORTANT_SAFETY_INFORMATION