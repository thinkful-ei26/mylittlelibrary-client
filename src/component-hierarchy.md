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












