const dummyData = {
  title: "Reviewer of the Month (2020-21)",
  postedOn: "2021-04-06 15:19:00",
  description: `Over the years, many JGO reviewers have made outstanding contributions to the peer review process. They demonstrated professional effort and enthusiasm in their reviews and provided comments that genuinely help the authors to enhance their work.`,
  highlightText: `Hereby, we would like to highlight some of our outstanding reviewers, with a brief interview of their thoughts and insights as a reviewer. Allow us to express our heartfelt gratitude for their tremendous effort and valuable contributions to the scientific process.`,
  reviewers: [
    {
      id: 1,
      month: "December",
      names: [
        {
          rid: 11,
          name: "Samuel M Miller",
          affiliation: "Yale University, United States",
          details: `
            <div class="reviewer-details">
              <h3>Samuel M Miller</h3>
              <div class="profile-content">
                <div class="profile-image">
                  <img src="/samual.jpeg" alt="Samuel M Miller" />
                </div>
                <div class="profile-text">
                  <p>Samuel Miller, MD is a general surgery resident at Yale University and currently a fellow in the National Clinician Scholars Program, also at Yale, New Haven, the United States. He earned his undergraduate degree in Psychology from Brown University, and his Doctor of Medicine from the Warren Alpert Medical School of Brown University. Dr. Miller's current work focuses on the informed consent process in older surgical patients as well as preoperative assessment tools that can predict surgical outcomes in older adults.</p>
                  <p>In Dr. Miller's opinion, it is crucial for authors to complete Conflict of Interest (COI) forms recommended by International Committee of Medical Journal Editors (ICMJE). "COI declaration is important. Whether we like it or not, bias is present in our everyday lives. It is important to recognize all potential biases when we can, and to acknowledge that unconscious bias may exist in all of us."</p>
                  <p class="author">(By Vicky Wong, Brad Li, Eunice X. Xu)</p>
                </div>
              </div>
            </div>
          `,
        },
        {
          rid: 22,
          name: "Erin L. Van Blarigan",
          affiliation: "University of California, United States",
          details: `
            <div class="reviewer-details">
              <h3>Baluram M Miller</h3>
              <div class="profile-content">
                <div class="profile-image">
                  <img src="/samual.jpeg" alt="Samuel M Miller" />
                </div>
                <div class="profile-text">
                  <p>Samuel Miller, MD is a general surgery resident at Yale University and currently a fellow in the National Clinician Scholars Program, also at Yale, New Haven, the United States. He earned his undergraduate degree in Psychology from Brown University, and his Doctor of Medicine from the Warren Alpert Medical School of Brown University. Dr. Miller's current work focuses on the informed consent process in older surgical patients as well as preoperative assessment tools that can predict surgical outcomes in older adults.</p>
                  <p>In Dr. Miller's opinion, it is crucial for authors to complete Conflict of Interest (COI) forms recommended by International Committee of Medical Journal Editors (ICMJE). "COI declaration is important. Whether we like it or not, bias is present in our everyday lives. It is important to recognize all potential biases when we can, and to acknowledge that unconscious bias may exist in all of us."</p>
                  <p class="author">(By Vicky Wong, Brad Li, Eunice X. Xu)</p>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
    {
      id: 2,
      month: "November",
      names: [
        {
          rid: 33,
          name: "Erin L. Van Blarigan",
          affiliation: "University of California, United States",
          details: `
            <div class="reviewer-details">
              <h3>Erin L. Van Blarigan</h3>
              <div class="profile-content">
                <div class="profile-image">
                  <img src="erin.jpeg" />
                </div>
                <div class="profile-text">
                  <p>Erin Van Blarigan, ScD is an Associate Professor at Department of Epidemiology and Biostatistics, University of California, San Francisco, California, the United States. Currently, she works as a nutritional epidemiologist and her research focuses on the relation between lifestyle factors, including diet and physical activity, and cancer mortality and mortality. Her goal is to provide evidence for lifestyle recommendations to improve cancer survivorship outcomes.</p>
                  <p class="author">(By Vicky Wong, Brad Li, Eunice X. Xu)</p>
                </div>
              </div>
            </div>`,
        },
      ],
    },
    // Add more reviewers as needed
  ],
};



export function transformVolumes(volumeArray) {
  let result = {};
  let idCounter = 1;

  // Group by year
  const groupedByYear = volumeArray.reduce((acc, volume) => {
    const year = volume.volume_year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(volume);
    return acc;
  }, {});


  for (const [year, volumes] of Object.entries(groupedByYear)) {
    result[year] = volumes.map((volume, index) => {

      return {
        id: idCounter++,
        volume: volume.volume_id,
        title: volume.volume_name,
        image: volume.volume_img,
        year: volume.volume_year
      };
    });
  }

  return result;
}