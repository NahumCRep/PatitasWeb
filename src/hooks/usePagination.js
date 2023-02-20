import { useMemo } from 'react'

export const usePagination = ({
    totalPages,
    currentPage,
    limit = 10,
    cellLimit = 5,
    siblingCount = 1
}) => {

    const DOTS = '...';

    const getRangeValues = (start, end) => {
        const length = end - start + 1
        return Array.from({ length }, (_, index) => index + start)
    }

    const pagination = useMemo(() => {
        const firstPage = 1;
        const lastPage = totalPages;

        let paginationLimit = siblingCount + 5

        if (paginationLimit >= totalPages) {
            const pag = getRangeValues(1, lastPage)
            return pag
        }

        const leftIndex = Math.max(currentPage - siblingCount, 1);
        const rightIndex = Math.min(currentPage + siblingCount, totalPages);
   
        const showLeftDots = leftIndex > 2;
        const showRightDots = rightIndex < lastPage - 2;

        // Show only right Dots
        if(!showLeftDots && showRightDots){
            let leftPagesCount = 5 * siblingCount
            let leftPages = getRangeValues(1, leftPagesCount)
            return [...leftPages, DOTS, lastPage] 
        }

        // Show only left Dots
        if (showLeftDots && !showRightDots) { 
            let rightPagesCount = 5 * siblingCount;
            let rightPages = getRangeValues(
              totalPages - rightPagesCount,
              totalPages
            );
            return [firstPage, DOTS, ...rightPages];
        }

        // show both side dots
        if(showLeftDots && showRightDots){
            const middlePages = getRangeValues(leftIndex, rightIndex)
            return [firstPage, DOTS, ...middlePages, DOTS, lastPage]
        }

    }, [totalPages, currentPage, limit, cellLimit])

    return { pagination }
}
