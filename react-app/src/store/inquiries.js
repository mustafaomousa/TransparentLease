const LOAD = 'load/loadInquiries';
const CREATE = 'create/createInquiry';

const loadInquries = (inquiries) => {
    return {
        type: LOAD,
        payload: inquiries
    };
};

const createInquiry = (inquiry) => {
    return {
        type: CREATE,
        payload: inquiry
    };
};

export const loadUserInquiries = (user_id) => async dispatch => {
    const response = await fetch(`/api/inquiry/${user_id}`);
    const result = await response.json();
    return dispatch(loadInquries(result.user_inquiries));
};

export const createNewInquiry = (broker_deal_id) => async dispatch => {
    const response = await fetch('/api/inquiry/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            broker_deal_id,
        })
    });
    const result = await response.json();
    return dispatch(createInquiry(result.new_inquiry));
};

const initialState = { userInquiries: {} }

const inquiryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { userInquiries: action.payload });
            return newState;
        case CREATE:
            newState = Object.assign({}, state);
            newState.userInquiries[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default inquiryReducer;