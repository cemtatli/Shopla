import React from "react";
import fakeComments from "~/data/fakeComment.js";

const Comment = () => {
  const renderRatingStars = (rating) => {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return filledStars + emptyStars;
  };

  return (
    <div className="mt-10 border-t border-gray-200 border-opacity-50">
      <h3 className="text-xl font-medium">Yorumlar</h3>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4">
        {fakeComments.map((comment, index) => (
          <div key={index} className="mt-4">
            <p className="text-sm font-medium">{comment.author}</p>
            <div className="flex items-center">
              <p className="mr-2 text-sm">{comment.comment}</p>
              <p className="text-base text-primary md:text-lg">{renderRatingStars(comment.rating)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
