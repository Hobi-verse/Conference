import type { ContentPageData } from "@/types/content-page";

export const submissionContent: ContentPageData = {
  hero: {
    title: "PAPER SUBMISSION",
    image: {
      src: "/assets/press/hero.webp",
      alt: "Paper submission audience",
    },
  },
  pageTitle: "PAPER SUBMISSION",
  intro: [
    "Manuscripts, which are here referred as submissions/ articles/ papers are the substantial piece of academic writing. Manuscripts for ICCSC-2026 will ONLY be accepted in electronic format through CMT. For submission of paper, at least one of the Authors of the paper should be a registered user of CMT. Unregistered authors should first create an account on CMT.",
    "Inability/ difficulty in online submission must be addressed to organizing team.",
  ],
  actions: {
    left: [
      {
        label: "Download Paper Template (Microsoft Word US Letter)",
        href: "#",
        style: "secondary",
      },
      {
        label: "Download Paper Template (Microsoft Word A4)",
        href: "#",
        style: "secondary",
      },
      {
        label: "Download Paper Template (LaTeX)",
        href: "#",
        style: "secondary",
      },
      {
        label: "LaTeX Bibliography Files",
        href: "#",
        style: "secondary",
      },
    ],
    right: [
      {
        label: "Submit Paper",
        href: "#",
        style: "primary",
      },
    ],
  },
  sectionsStyle: "plain",
  sections: [
    {
      title: "INSTRUCTION TO AUTHORS",
      items: [
        "Authors should only submit originally written, unpublished work to ICCSC-2026.",
        "Submissions should strictly follow the recommended IEEE Conference Template.",
        "All references must follow the IEEE format of citation.",
        "Please limit your paper within 6 pages in PDF format.",
        "Authors wishing to submit an over-length manuscript may do so. There will be an over-length page fee of USD 25 per page and limited to an additional 2 pages (maximum page submission is eight (8) pages).",
        "All fonts must be embedded in the file.",
        "Fonts that require non-English language support are not allowed.",
        "The document should not have any password protection.",
        "Do not put your own page numbers in the manuscript.",
        "Do not put your header and footer in the manuscript.",
        "The decision regarding the acceptance of the papers is at the discretion of the Chair of the recommendations of Technical Program Committee and weightage/ comments given by PC Members/ Reviewers.",
        "Note that short manuscripts / abstracts are not considered.",
      ],
    },
    {
      title: "Note to Authors",
      items: [
        "Papers submitted to ICCSC-2026 need to include a quantitative discussion related to why and how the proposed/ analyzed/ discussed technology, concept, process etc. is a significant technical improvement in its area.",
      ],
    },
    {
      title: "Out of Scope",
      items: [
        "Papers that are principally cataloguing qualitative or managerial aspects like impact, effect, case-study, rise, journey, study etc. will be insufficient to be accepted and are outside our scope. Next to this, submissions focusing only on policy/ decision making or economic aspects are unsuitable to accepted in ICCSC-2026.",
      ],
    },
    {
      title: "Types of Articles",
      items: [
        "ICCSC-2026 authors can select from a variety of approaches for articles that fall within the scope of this conference and IEEE. These article types include, but are not limited to:",
        "Original Paper: Describes the original work of author(s) in the form of an electronic manuscript, which may include abstract, key words, introduction, problem statement or justification, objective, approach, significance, research questions, limitations, definition of terms, referred or related work, methodology, technically in-depth investigation, details of experimental analysis, result and/ or conclusion, further scope of work, references on the topic within the scope of ICCSC-2026 and IEEE. This may include additional materials, including figures, tables, datasets, pictorial/ graphical representations, and videos links.",
        "Review Paper: A thorough compilation and succinct summary of research performed on the topic within the scope of ICCSC-2026 and IEEE, in the form of an electronic manuscript, which may include abstract, key words, introduction, problem statement or justification, objective, approach, significance, research questions, limitations, definition of terms, referred or related work, technically in-depth investigation or comparison, conclusion, pros and cons, proposed scope of further work and references. This may include additional materials, including figures, tables, datasets, pictorial/ graphical representations, and video links.",
      ],
    },
    {
      title: "References",
      items: [
        "Self-Citations: To comply with ethical standards as well as to provide appropriate context for published work, citations of the author’s own articles should not be excessive.",
        "Citation Style: The list of references should only include works that are cited in the text and that have been published or accepted for publication. Personal communications and unpublished works should only be mentioned in the text. Do not use footnotes or endnotes as a substitute for a reference list. The entries in the list should be numbered consecutively and cited in numerical order, and citations in the text should be identified in IEEE referencing format.",
      ],
    },
    {
      title: "After Acceptance",
      items: [
        "Final Manuscript: After manuscript acceptance, the corresponding author must submit the final version, inclusive of any suggested changes mentioned in the acceptance notification email.",
        "Copyright Transfer: Authors will be asked to transfer copyright of the manuscript to IEEE. This is a mandatory requirement and will be an electronic process. Author(s) will be notified via email for e-copyright transfer process. This will ensure the widest possible protection and dissemination of information under copyright laws. In case of any difficulty in the copyright transfer process, author(s) must connect with the conference organizers.",
        "Preprint: The camera-ready-paper is here referred to as Preprint, which will be the final version of the manuscript at the end of the ICCSC-2026. The preprint version of the eligible manuscripts will be sent to IEEE for inclusion in IEEE Digital Library. ICCSC-2026 organizing team will notify the corresponding author/ author(s) with preprint copy of the manuscript via email for their consent on the final version. Authors may also suggest any changes/ errors/ typos/ spelling mistakes, if required with a revert mail, if required.",
        "Update in Manuscript: Once the manuscript is accepted and if any changes are suggested in the acceptance notification or otherwise, author(s) must include those changes without changing the essence of the accepted version. These changes must be limited to 20% part of the manuscript.",
      ],
    },
    {
      title: "Other Guidelines",
      items: [
        "Ethics: Originality of the manuscript submitted is the author(s) responsibility, and author(s) must avoid duplicate submission and publication, plagiarism, and self-plagiarism. All manuscript submissions will be screened against the CrossCheck database.",
        "Co-Author Guidelines: When an article is submitted, it is implied that publication has been approved by all author(s)/ co-author(s). Further, changes to the co-author list are not permitted after the manuscript has been accepted. Exceptional cases may be considered by the Editor.",
        "Corresponding Author Guidelines: The Corresponding Author is here referred to the author who will be doing the e-mail correspondence with ICCSC-2026, irrespective of the author position in author sequence. In addition to the content of manuscript, Corresponding Author will solely be responsible for putting the name and details of other authors/ co-authors in the submission manuscript. Conference committee explicitly considers that all the authors/ co-authors has/ have contributed to the submission and their consent has/ have been taken to put their name in the submission by the corresponding/ first author.",
        "Headings: Please prefer not to use more than three levels of displayed headings.",
        "Abbreviations: Abbreviations will be introduced with their definitions upon their first mention and will be consistently employed thereafter. In cases where an abbreviation is initially used in the abstract, it will be defined both in the abstract and upon its first appearance in the main text to ensure clarity and consistency.",
        "Notifications: Authors of manuscripts submitted to ICCSC-2026 will receive notifications exclusively via email. Please note that ICCSC-2026 cannot be held responsible for any potential lapses in email communication, including instances of non-receipt of messages, emails being directed to junk/spam folders, or similar technical issues. Your understanding in this matter is greatly appreciated.",
      ],
    },
  ],
};
