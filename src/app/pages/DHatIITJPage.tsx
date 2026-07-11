import { DHatIITJ } from '../components/DHatIITJ';
import { IITJStudents } from '../components/IITJStudents';

export function DHatIITJPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6">
            DH at IIT Jodhpur
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            India's premier Digital Humanities program combining technology, creativity, and human insight
          </p>
        </div>
      </div>

      {/* DH at IIT Jodhpur Content */}
      <DHatIITJ />
      
      {/* IIT Jodhpur Students */}
      <IITJStudents />
    </div>
  );
}