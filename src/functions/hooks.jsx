import { useEffect } from "react";

export const useDocumentTitle = function (page) {
  useEffect(() => {
    document.title = `Aljaž Ferenc | Portfolio - ${page}`;
  }, []);
};
