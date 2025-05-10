import FullArticle from '@/components/FullArticle';
import StyleSheet from '@/components/StyleSheet';
import { _GET } from '@/request/request';

export default async function ArticleReadPage({ params }) {
    const { articleId } = await params
    const response = await _GET(`articlefull/readOne/${articleId}`, 'core')

    // const articleData = {
    //     id: '97011',
    //     title: 'Development of a prognostic risk model for colorectal cancer and association of the prognostic model with cancer stem cell and immune cell infiltration',
    //     abstract: 'hfhoufhuorhfof',
    //     authors: [
    //         { name: 'Jian Zhang', superscript: '1', corresponding: true, email: 'zjbg163163@163.com' },
    //         { name: 'Peter C. Ambe', superscript: '2' },
    //         { name: 'Aasma Shaukat', superscript: '3' }
    //     ],
    //     contributions: [
    //         '(I) Conception and design: J Zhang',
    //         '(II) Administrative support: J Zhang',
    //         '(III) Provision of study materials or patients: J Zhang',
    //         '(IV) Collection and assembly of data: J Zhang, PC Ambe',
    //         '(V) Data analysis and interpretation: J Zhang, A Shaukat',
    //         '(VI) Manuscript writing: All authors',
    //         '(VII) Final approval of manuscript: All authors'
    //     ],
    //     sections: [
    //         {
    //             title: 'Background',
    //             content: 'The development of a prognostic model for patients with colorectal cancer (CRC) can facilitate the assessment of patient survival and the effectiveness of clinical treatments. A reasonable prognostic model can provide a basis for individualized treatment, prognostic risk stratification, and subsequent therapy for CRC patients. The aim of our study was to construct a prognostic model for patients with CRC using sequencing data derived from The Cancer Genome Atlas (TCGA) database.'
    //         },
    //         {
    //             title: 'Methods',
    //             content: 'Sequencing data of paracancerous tissues (n=51) and CRC samples (n=647) were downloaded from the TCGA database. Least absolute shrinkage and selection operator (LASSO) and Cox regression analyses were employed to identify prognostic factors. A restricted cubic spline (RCS) model was used to assess the nonlinear relationship between risk score and poor overall survival (OS). The Genomics of Drug Sensitivity in Cancer (GDSC) database was accessed to evaluate the correlation between the prognostic model'
    //         },
    //         {
    //             title: 'Results',
    //             content: 'Our findings revealed that six genes, including Niemann-Pick C1-like 1 (NPC1L1) [hazard ratio (HR) =1.53; 95% confidence interval (CI): 1.08–2.17; P=0.02], glucagon-like peptide 2 receptor (GLP2R) (HR =0.68; 95% CI: 0.48–0.97; P=0.04), solute carrier family 8 member A3 (SLC8A3) (HR =0.67; 95% CI: 0.47–0.96; P=0.03), alpha-1-microglobulin/bikunin precursor (AMBP) (HR =0.64; 95% CI: 0.45–0.91; P=0.01), single-pass membrane protein with coiled-coil domains 2 (SMCO2) (HR =0.68; 95% CI: 0.48–0.97; P=0.03), and tetatricopeptide repeat domain 16 (TTC16) (HR =1.55; 95% CI: 1.09–2.20; P=0.02) function as independent prognostic factors for CRC.'
    //         }
    //     ],
    //     metrics: {
    //         views: 298,
    //         downloads: 56
    //     },
    // };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <FullArticle articleFull={response} />
            
            <StyleSheet />
        </div>
    );
}



