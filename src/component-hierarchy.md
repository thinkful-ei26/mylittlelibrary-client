COMPONENT HIERARCHY

1. 1. MVP
    A. index.js (ReactDOM.render(), Provider, store)
        1. App.js (applies BrowserRouter)
         a. MainView (root, Handles state for student search functionality)
         b. Header (contains site navigation bar)
         c. Footer (contains navigation to staff-view)
                 1. StaffView ()
                    i. add-view-input, pass-through to render add-view component
                        - add-view.js (apply redux-form at this level)
                             a. input.js (logic for error and message handling)
                    ii. edit-view-input, pass-through to render edit-view component
                             a. edit.view.js
                    iii delete PENDING




    A. NAV
        a. HOME
        b. Log in (EXTENSION)
        c. Library Information (EXTENSION)
    B. SEARCH
        a. SEARCH-FORM
        b. SEARCH-RESULTS
    C. DATABASE
        a. SEARCH-FORM
        b. SEARCH-RESULTS
        C. ADD
        D. UPDATE
        E. DELETE

1. 2. MVP
    A. HEADER
        a. HOME
        b. Log in (EXTENSION)
        c. Library Information (EXTENSION)
    B. SEARCH
        a. SEARCH-FORM
        b. SEARCH-RESULTS
    C. DATABASE
        a. SEARCH-FORM
        b. SEARCH-RESULTS
        C. ADD
        D. UPDATE
        E. DELETE





















1.2. EXTENSIONS
    A. NAV
        a. HOME
        b. Log in (EXTENSION)
            1. SEARCH
                a. SEARCH-FORM
                b. SEARCH-RESULTS
            2. PLACE HOLD (EXTENSION)
            3. SEE_PAY_FINES (EXTENSION)
            4. MAKE LISTS (EXTENSION)
        c. Library Information (EXTENSION)
    B. SEARCH
        a. SEARCH-FORM
        b. SEARCH-RESULTS
    C. FEATURED-ITEM (EXTENSION)
        a. DETAIL (EXTENSION)
        b. HOLD(Log in) (EXTENSION)
            i. Log in (EXTENSION)
                1. SEARCH
                    a. SEARCH-FORM
                    b. SEARCH-RESULTS
                2. PLACE HOLD
                3. SEE_PAY_FINES
                4. MAKE LISTS
    D. DATABASE
