import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className="container mb-4">
            <div className="row text-center">
                <div className="col">
                    {gotoPrevPage && (
                        <button
                            className="btn btn-warning"
                            onClick={gotoPrevPage}
                        >
                            Previous Page
                        </button>
                    )}
                </div>

                <div className="col">
                    {gotoNextPage && (
                        <button
                            className="btn btn-warning"
                            onClick={gotoNextPage}
                        >
                            Next Page
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}