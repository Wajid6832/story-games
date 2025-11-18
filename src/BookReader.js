import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Award, Play, Square } from 'lucide-react';

export default function BookReader() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const bookpages = {
    title: "Book Name",
    chapter: "1.1 Character One",
    sections: [
      {
        title: "1.1.1. Chapter 1",
        content: [
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugiat nulla facilisi.",
          "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
          "Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugiat nulla facilisi."
        ],
        image: true
      }
    ]
  };

  const totalPages = 20;

  const goToNextPage = () => {
    if (currentPage < totalPages - 2) {
      setCurrentPage(currentPage + 2);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={goToPrevPage}
              className="w-10 h-10 rounded bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">
              {bookData.title} • {bookData.chapter}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-600 transition-colors">
              <Award className="w-4 h-4" />
              Award Good Read Token
            </button>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-colors ${
                isLiked ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Book Pages */}
        <div className="flex">
          {/* Left Page */}
          <div className="w-1/2 p-12 border-r-2 border-gray-300 min-h-[800px] relative">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              {bookData.sections[0].title}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              {bookData.sections[0].content.map((paragraph, idx) => (
                <p key={idx} className="text-sm">
                  {paragraph}
                </p>
              ))}
              <p className="text-sm">
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-gray-500">
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>

          {/* Right Page */}
          <div className="w-1/2 p-12 min-h-[800px] relative bg-gray-50">
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugiat nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="mt-8 mb-6">
              <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-400 rounded"></div>
                  </div>
                  <p className="text-sm text-gray-500 italic">Lorem Ipsum, dor sit amet</p>
                </div>
              </div>
            </div>

            {/* Sound Controls */}
            <div className="flex gap-3 mb-6">
              <button 
                onClick={() => setIsSoundPlaying(!isSoundPlaying)}
                className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  isSoundPlaying 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-indigo-500 text-white hover:bg-indigo-600'
                }`}
              >
                {isSoundPlaying ? (
                  <>
                    <Square className="w-4 h-4" />
                    Stop sound effects
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Play sound effects
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p className="text-sm">
                Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugiat nulla facilisi.
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-gray-500">
              Page {currentPage + 2} of {totalPages}
            </div>
          </div>
        </div>

        {/* Navigation Button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages - 2}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}