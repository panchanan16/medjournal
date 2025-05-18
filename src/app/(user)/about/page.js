import AboutText from '@/components/AboutText';
import { _GET } from '@/request/request';

export default async function AimAndScope() {
    const AimScope = await _GET('journal/readAll', 'core')

    return (
        <>
            <div className="lg:w-3/4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-16 bg-gradient-to-r from-red-600 to-red-900" />
                    <AboutText Title={'Aim & Scope'} Html={AimScope ? AimScope[0].aim_scope : ""} />

                </div>

                <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-red-800 mb-4">
                            Interested in Contributing?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            We welcome submissions from researchers, healthcare professionals, and experts in the field. Please review our submission guidelines and editorial policies before submitting your manuscript.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                                Submit Manuscript
                            </a>
                            <a href="#" className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors">
                                Contact Editorial Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}