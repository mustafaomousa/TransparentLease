import { omit } from "lodash";

const LOAD = 'inquiry/loadInquiries';
const CREATE = 'inquiry/createInquiry';
const DELETE = 'inquiry/removeInquiry'

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

const removeInquiry = (inquiryId) => {
    return {
        type: DELETE,
        payload: inquiryId
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
    return dispatch(createInquiry(result));
};

export const deleteInquiry = (inquiry_id) => async dispatch => {
    const response = await fetch(`/api/inquiry/delete/${inquiry_id}`, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return dispatch(removeInquiry(result.deleted_inquiry))
};

const initialState = { userInquiries: {} }

const inquiryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { userInquiries: action.payload });
            return newState;
        case CREATE:
            newState = Object.assign({}, state, { userInquiries: { ...action.payload, ...state.userInquiries } });
            return newState;
        case DELETE:
            console.log(action.payload)
            return { ...state, userInquiries: omit(state.userInquiries, action.payload.id) }
        default:
            return state;
    }
};

export default inquiryReducer;