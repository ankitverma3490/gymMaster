import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import api from '../../interseptors/axiosInterceptor'

// 📥 Add Member
export const addMember = createAsyncThunk(
  "members/addMember",
  async (formData, thunkAPI) => {
    try {
      const response = await api.post("/member", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Very important!
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 📥 Get All Members
export const getMembers = createAsyncThunk(
  "members/getMembers",
  async (_, thunkAPI) => {
    try {
      const res = await api.get(`/member`);
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 📥 Get Member by ID
export const getMemberById = createAsyncThunk(
  "members/getMemberById",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/member/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 🗑 Delete Member
export const deleteMember = createAsyncThunk(
  "members/deleteMember",
  async (id, thunkAPI) => {
    try {
      await api.delete(`deleteMember/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 🔥 Update Member
export const updateMember = createAsyncThunk(
  "members/updateMember",
  async (updatedMember, thunkAPI) => {
    try {
      const response = await api.put(
        `/editMember/${updatedMember.id}`,
        updatedMember,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Adjust if needed
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ Update Member Status
export const updateMemberStatus = createAsyncThunk(
  "members/updateMemberStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `memberStatus/${id}`,
        { is_active: status }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 🔥 Slice
const memberSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    selectedMember: null, // Store selected member for detail view
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔄 Add Member
      .addCase(addMember.pending, (state) => {
        state.loading = true;
      })
      .addCase(addMember.fulfilled, (state, action) => {
        state.loading = false;
        state.members.push(action.payload);
      })
      .addCase(addMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 📥 Get All Members
      .addCase(getMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload;
      })
      .addCase(getMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 📥 Get Member by ID
      .addCase(getMemberById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMemberById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMember = action.payload;
      })
      .addCase(getMemberById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🗑 Delete Member
      .addCase(deleteMember.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.loading = false;
        state.members = state.members.filter(
          (member) => member.id !== action.payload.id
        );
      })
      .addCase(deleteMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔄 Update Member
      .addCase(updateMember.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        state.loading = false;
        state.members = state.members.map((member) =>
          member.id === action.payload.id ? action.payload : member
        );
      })
      .addCase(updateMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Update Member Status
      .addCase(updateMemberStatus.fulfilled, (state, action) => {
        const updatedMember = action.payload;
        const index = state.members.findIndex(
          (member) => member.id === updatedMember.id
        );
        if (index !== -1) {
          state.members[index] = updatedMember;
        }
      });
  },
});

export default memberSlice.reducer;
