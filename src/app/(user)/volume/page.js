import Head from 'next/head';
import { Poppins } from 'next/font/google';
import ArticleCard from '../../components/Volumecard';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function Home() {
  const articles = [
    {
      id: 1,
      title: "Geriatric Nutritional Risk Index is an effective prognostic predictor for metastatic/recurrent or unresectable esophageal cancer receiving immunotherapy",
      authors: "Bei Wang, Zixuan Wang, Chuanhai Xu, Yueqin Wang, Honglian Gao, Haiping Liu, Mingyue Zheng, Zhenyuan Jiang, Zini Zhou, Gui Liu, Wei Geng",
      pageInfo: "PDF Pages: 1-16",
      links: ["Full Text (590)", "Reporting Checklist", "Data Sharing Statement", "Peer Review File", "COI Form", "Open Access", "Get Permission"]
    },
    {
      id: 2,
      title: "Hyperthermic intraperitoneal chemotherapy plus SOX chemotherapy versus SOX chemotherapy alone in patients with gastric cancer and peritoneal metastasis: a phase II randomized clinical trial",
      authors: "Lijie Luo, Zijing Zhang, Haiping Zeng, Yuting Xu, Yaohui Peng, Haipeng Huang, Zeyu Lin, Wenjun Xiong, Wei Wang",
      pageInfo: "PDF Pages: 17-26",
      links: ["Full Text (537)", "Reporting Checklist", "Trial Protocol", "Data Sharing Statement", "Peer Review File", "COI Form", "Open Access", "Get Permission"]
    },
    {
      id: 3,
      title: "The role of TMSB15A in gastric cancer progression and its prognostic significance",
      authors: "Xiaolei Zhang, Xiang Yu, Qicheng Shen, Xiaohui Jiang, Yuan Zhou, Qiu Xue, Guangxin Cao",
      pageInfo: "PDF Pages: 27-40",
      links: ["Full Text (514)", "Reporting Checklist", "Data Sharing Statement", "Peer Review File", "COI Form", "Open Access", "Get Permission"]
    },
    {
      id: 4,
      title: "The prognostic impact of body mass index on patients with gastric adenocarcinoma and mucinous adenocarcinoma: a retrospective cohort study",
      authors: "Chen Liang, Hai-Dong Liu, Han-Yi He, Ken Chen, Yi-Xing Huang, Dan Zu, Qi-Mei Bao, Yang-Chan Hu, Guo-Xia Liu, Chun-Kai Zhang, Yu-Ke Zhong, Ming-Cong Deng, Yan-Hua He, Ji Jing, Yin Shi, Zu Ye, Xiang-Dong Cheng",
      pageInfo: "PDF Pages: 41-52",
      links: ["Full Text (525)", "Reporting Checklist", "Data Sharing Statement", "Peer Review File", "COI Form", "Open Access", "Get Permission"]
    },
    {
      id: 5,
      title: "A prognostic nomogram for patients with gastrointestinal stromal tumors based on machine learning",
      authors: "Xiao Liu, Bing Zhou, Zhen Ding, Sheng Xu, Yuzhen Xu, Pujun Gao, Xuan Wu, Hongyu Guo, Zhonghua Chu",
      pageInfo: "PDF Pages: 53-66",
      links: ["Full Text (512)", "Reporting Checklist", "Data Sharing Statement", "Peer Review File", "COI Form", "Open Access", "Get Permission"]
    }
  ];

  return (
    <div className={`${poppins.variable} font-poppins`}>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Vol 16, No 1 (February 28, 2025): Journal of Gastrointestinal Oncology</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">Original Article</h3>
                <div className="border-b border-gray-200 mb-4"></div>
              </div>

              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md mb-8">
              <div className="bg-red-700 text-white p-4">
                <h3 className="text-lg font-semibold">Current Issue</h3>
              </div>
              <div className="p-4">
                <img 
                  src="/archives.jpeg" 
                  alt="Journal Cover" 
                  className="w-full h-auto object-cover rounded"
                />
                <div className="mt-4 text-center">
                  <h4 className="font-semibold">Vol 16, No 1</h4>
                  <p className="text-gray-600">February 2025</p>
                  <button className="mt-3 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition">View Issue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}