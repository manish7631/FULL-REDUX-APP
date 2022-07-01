import React from 'react'

import { BookLists } from '../components/BookLists'
import { FilterSort } from '../components/FilterSort'

import styled from 'styled-components'

export const Boooks = () => {
    // const [searchParams] = useSearchParams()
    // const dispatch = useDispatch()
    // const books = useSelector(state => state.books)





    // useEffect(() => {

    //     const urlCategory = searchParams.getAll("category")

    //     const urlSort = searchParams.get("sortBy")

    //     if (books.length === 0 && (!urlCategory ?? !urlSort)) {
    //         dispatch(getBooks())
    //     }


    // }, [])


    // console.log(books)


    return (
        <div>
            <h2>Books</h2>
            <BookPageWrapper>
                <FilterSortWrapper>
                    <FilterSort />
                </FilterSortWrapper>
                <BookListWrapper>
                    <BookLists />
                </BookListWrapper>
            </BookPageWrapper>
        </div>
    )
}


const BookPageWrapper = styled.div`
display:flex;
`;

const FilterSortWrapper = styled.div`
width:300px;
border:1px solid red;
`

const BookListWrapper = styled.div`
width:100%;
border:1px solid black;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(310px, max-content));
grid-gap:16px;
justify-content:center;
padding:initial;
`