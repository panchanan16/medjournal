import { _GET } from '@/request/request';
import {
  FileText,
  Send,
  CheckCircle,
  XCircle,
  Clock,
  TimerOffIcon
} from 'lucide-react';

async function AdminDashboard() {
  
  const summary = await _GET(`articlefull/summary`, 'core')
  const { submission, published } = summary


  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={FileText}
            title="Total Published"
            value={published && published?.total_published ? published.total_published : "0"}
            color="bg-green-500"
          />
          <StatCard
            icon={Send}
            title="Total Submitted"
            value={submission && submission?.total_items ? submission.total_items : "0"}
            color="bg-blue-500"
          />
          <StatCard
            icon={CheckCircle}
            title="Total Accepted"
            value={submission && submission?.total_accepted ? submission.total_accepted : "0"}
            color="bg-emerald-500"
          />
          <StatCard
            icon={XCircle}
            title="Total Rejected"
            value={submission && submission?.total_rejected ? submission.total_rejected : "0"}
            color="bg-red-500"
          />
          <StatCard
            icon={Clock}
            title="In Progress"
            value={submission && submission?.total_progress ? submission.total_progress : "0"}
            color="bg-yellow-500"
          />
           <StatCard
            icon={TimerOffIcon}
            title="Pending"
            value={submission && submission?.total_pending ? submission.total_pending : "0"}
            color="bg-orange-600"
          />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;