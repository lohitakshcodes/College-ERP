import React, { useState } from "react";
import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button,
  Chip,
  Tabs,
  Tab,
  Grid,
  Divider,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";

const studentMenu = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Profile", icon: <InfoIcon /> },
  { label: "Course Registration", icon: <SchoolIcon /> },
  { label: "Attendance", icon: <AssignmentIcon /> },
  { label: "Examinations", icon: <AssignmentIcon /> },
  { label: "Assignments", icon: <AssignmentIcon /> },
  { label: "Notifications", icon: <NotificationsIcon /> },
  { label: "Documents", icon: <DocumentScannerIcon /> },
  { label: "Fee Payments", icon: <ReceiptIcon /> },
];

// Main data, expanded for comprehensive profile
const personalDetailsInitial = {
  nameOnTC: "",
  regNo: "",
  dateOfBirth: "",
  birthPlace: "",
  nationality: "",
  religion: "",
  gender: "",
  bloodGroup: "",
  domicileState: "",
  domicileCountry: "",
  category: "",
  caste: "",
  subcaste: "",
  casteAsPerTC: "",
  motherTongue: "",
  lastSchool: "",
  hobby: "",
  nriPoi: "",
  birthState: "",
  prevEduInMaha: "",
  parent: {
    fatherName: "",
    motherName: "",
    occupation: "",
    income: "",
    fatherDomicile: "",
    motherDomicile: "",
    fatherEmail: "",
    motherEmail: "",
    fatherContact: "",
    motherContact: "",
  },
  guardian: {
    name: "",
    email: "",
    mobile: "",
  },
  mobile: "",
  email: "",
  addressPermanent: "",
  addressCorrespondence: "",
  registrationCode: "",
  course: "",
  year: "",
  formNo: "",
  pattern: "",
  status: "",
  section: "",
  dateOfRegistration: "",
  admissionMode: "",
  academicYear: "",
  currentAcademicYear: "",
  universityEnrollmentNumber: "",
  role: "",
};

const academicDetails = {
  qualExam: {
    examName: "",
    marks: "",
    outOf: "",
    percentile: "",
    rollNo: "",
    medium: "",
    certificate: "",
  },
  ssc: {
    board: "",
    school: "",
    marks: "",
    outOf: "",
    percentage: "",
    yearPass: "",
    medium: "",
    certificate: "",
  },
  hsc: {
    board: "",
    college: "",
    marks: "",
    outOf: "",
    percentage: "",
    stream: "",
    yearPass: "",
    medium: "",
    certificate: "",
  },
  cgpa: "",
  credits: "",
  totalCredits: "",
  attendance: "",
  courses: [
    { course: "AI Search Algorithms", faculty: "Dr. Rane", credits: 4 },
    { course: "Embedded Systems", faculty: "Prof. Joshi", credits: 4 },
    { course: "Web Development", faculty: "Dr. Shah", credits: 3 },
  ],
};

const requiredDocuments = [
  {
    name: "SSC 10th Mark Sheet Certificate",
    type: "Certificate",
    status: "Approved",
  },
  {
    name: "HSC 12th Mark Sheet Certificate",
    type: "Certificate",
    status: "In Approval",
  },
  {
    name: "Diploma Final Year Mark-sheet",
    type: "Certificate",
    status: "In Approval",
  },
  {
    name: "Leaving/Transfer Certificate",
    type: "Certificate",
    status: "Approved",
  },
  { name: "Aadhaar Card", type: "Address Proof", status: "Approved" },
  { name: "Candidates Passport", type: "Address Proof", status: "In Approval" },
  { name: "Transcript", type: "Certificate", status: "Rejected" },
  { name: "Anti-ragging Affidavit", type: "Affidavit", status: "Approved" },
  { name: "Caste Certificate", type: "Certificate", status: "In Approval" },
  {
    name: "Caste Validity Certificate",
    type: "Certificate",
    status: "Approved",
  },
  {
    name: "Birth Certificate / Passport",
    type: "Certificate",
    status: "Approved",
  },
];

// COMPONENTS:

const Sidebar = ({ active, onChange, expanded }) => {
  // Collapsed (mini) sidebar
  if (!expanded) {
    return (
      <Box
        sx={{
          width: 70,
          position: "fixed",
          left: 0,
          top: 64, // height of TopBar
          height: "calc(100vh - 64px)",
          bgcolor: "#fff",
          borderRight: "1px solid #eeeff5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          zIndex: 1500,
        }}
      >
        {studentMenu.map(({ label, icon }) => (
          <Tooltip title={label} key={label} placement="right">
            <IconButton
              size="large"
              color={active === label ? "primary" : "default"}
              onClick={() => onChange(label)}
              sx={{
                my: 1.5,
                mx: "auto",
                display: "block",
              }}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    );
  }

  // Expanded sidebar
  return (
    <Box
      sx={{
        width: 260,
        position: "fixed",
        left: 0,
        top: 64,
        height: "calc(100vh - 64px)",
        bgcolor: "#fff",
        borderRight: "1px solid #eeeff5",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        px: 2,
        py: 2,
        zIndex: 1500,
      }}
    >
      {studentMenu.map(({ label, icon }) => (
        <Tooltip title={label} key={label} placement="right">
          <Button
            startIcon={icon}
            onClick={() => onChange(label)}
            variant={active === label ? "contained" : "text"}
            color={active === label ? "primary" : "inherit"}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              borderRadius: 2,
              mb: 1,
              fontWeight: active === label ? 700 : 400,
              fontSize: 14,
              gap: 2,
              py: 1.25,
              minWidth: 0,
            }}
          >
            {label}
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
};

const TopBar = ({
  user,
  onLogout,
  onToggleSidebar, // <- add this prop in App when calling TopBar!
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "98vw",
        height: 64,
        zIndex: 2000, // higher than sidebar to overlap!
        bgcolor: "#fff",
        borderBottom: "1px solid #eeeff3",
        display: "flex",
        alignItems: "center",
        px: 3,
      }}
    >
      {/* Left: Menu Button + University ERP Name */}
      <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
        <IconButton onClick={onToggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            ml: 1,
            fontWeight: 700,
            color: "primary.main",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
          noWrap
        >
          University ERP
        </Typography>
      </Box>

      {/* Center: Breadcrumb + Search Box */}
      <Box
        sx={{ flex: 1, minWidth: 250, display: "flex", alignItems: "center" }}
      >
        <Typography fontSize={13} color="#8b96b5" noWrap sx={{ minWidth: 220 }}>
          Home / Student / <b>Profile</b>
        </Typography>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          placeholder="Search settings, documents..."
          sx={{ mx: 3, bgcolor: "#f8f9ff", borderRadius: 1, minWidth: 200 }}
        />
      </Box>

      {/* Right: Buttons and User Avatar/Logout */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button variant="outlined" sx={{ fontWeight: 600 }}>
          Export Profile
        </Button>
        <Button variant="contained" sx={{ fontWeight: 600, ml: 1 }}>
          Save Changes
        </Button>
        <IconButton size="large" onClick={(e) => setAnchorEl(e.currentTarget)}>
          <Avatar src="/profile.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem disabled>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar src="/profile.jpg" />
              <Box>
                <Typography fontWeight={700}>{user.fullName}</Typography>
                <Typography fontSize={12}>{user.role}</Typography>
              </Box>
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={onLogout}>
            <LogoutIcon fontSize="small" /> Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

const ProfileCard = ({
  data,
  editable,
  onEdit,
  onSave,
  onCancel,
  onChange,
}) => (
  <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Avatar src="/profile.jpg" sx={{ width: 64, height: 64, mr: 3 }} />
      <Box flex={1}>
        <Typography fontWeight={700} fontSize={20} color="primary.main">
          {data.nameOnTC}
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          Reg No: {data.regNo}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Chip
            label={`Semester V`}
            color="primary"
            size="small"
            sx={{ mr: 1 }}
          />
          <Chip
            label={data.course}
            size="small"
            sx={{
              mr: 1,
              bgcolor: "#e3f2fd",
              color: "#1976d2",
              fontWeight: 600,
            }}
          />
          <Chip
            label={`Section ${data.section}`}
            size="small"
            sx={{ bgcolor: "#e3f2fd", color: "#1976d2", fontWeight: 600 }}
          />
        </Box>
      </Box>
      <Box>
        {editable ? (
          <Button variant="contained" color="error" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          <Button variant="contained" onClick={onEdit}>
            Edit
          </Button>
        )}
      </Box>
    </Box>
    <Divider sx={{ mb: 3 }} />

    <Grid container spacing={2}>
      {[
        { label: "Full Name (TC)", value: data.nameOnTC, key: "nameOnTC" },
        { label: "Date of Birth", value: data.dateOfBirth, key: "dateOfBirth" },
        { label: "Birth Place", value: data.birthPlace, key: "birthPlace" },
        { label: "Nationality", value: data.nationality, key: "nationality" },
        { label: "Religion", value: data.religion, key: "religion" },
        { label: "Gender", value: data.gender, key: "gender" },
        { label: "Blood Group", value: data.bloodGroup, key: "bloodGroup" },
        {
          label: "Domicile State",
          value: data.domicileState,
          key: "domicileState",
        },
        {
          label: "Domicile Country",
          value: data.domicileCountry,
          key: "domicileCountry",
        },
        { label: "Category", value: data.category, key: "category" },
        { label: "Caste", value: data.caste, key: "caste" },
        { label: "Subcaste", value: data.subcaste, key: "subcaste" },
        {
          label: "Mother Tongue",
          value: data.motherTongue,
          key: "motherTongue",
        },
        {
          label: "Last School/College",
          value: data.lastSchool,
          key: "lastSchool",
        },
        { label: "Hobby", value: data.hobby, key: "hobby" },
        { label: "NRI/POI", value: data.nriPoi, key: "nriPoi" },
        {
          label: "Previous Edu in Maharashtra",
          value: data.prevEduInMaha,
          key: "prevEduInMaha",
        },
        { label: "Mobile Number", value: data.mobile, key: "mobile" },
        { label: "Email", value: data.email, key: "email" },
        {
          label: "Permanent Address",
          value: data.addressPermanent,
          key: "addressPermanent",
        },
        {
          label: "Correspondence Address",
          value: data.addressCorrespondence,
          key: "addressCorrespondence",
        },
        {
          label: "Self Registration Code",
          value: data.registrationCode,
          key: "registrationCode",
        },
        { label: "Course", value: data.course, key: "course" },
        {
          label: "Academic Year",
          value: data.academicYear,
          key: "academicYear",
        },
        {
          label: "Current Academic Year",
          value: data.currentAcademicYear,
          key: "currentAcademicYear",
        },
        {
          label: "Date of Registration",
          value: data.dateOfRegistration,
          key: "dateOfRegistration",
        },
        {
          label: "Admission Mode",
          value: data.admissionMode,
          key: "admissionMode",
        },
        { label: "Admission Status", value: data.status, key: "status" },
        { label: "Section", value: data.section, key: "section" },
      ].map(({ label, value, key }) => (
        <Grid item xs={12} sm={6} key={key}>
          <TextField
            label={label}
            value={value || ""}
            fullWidth
            disabled={!editable}
            onChange={
              editable ? (e) => onChange(key, e.target.value) : undefined
            }
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      ))}
      {/* Parent Details similarly with editable TextFields */}
      <Grid item xs={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Parent Details</Typography>
      </Grid>
      {[
        {
          label: "Father's Name",
          value: data.parent.fatherName,
          key: "fatherName",
        },
        {
          label: "Mother's Name",
          value: data.parent.motherName,
          key: "motherName",
        },
        {
          label: "Father's Occupation",
          value: data.parent.occupation,
          key: "fatherOccupation",
        },
        {
          label: "Father's Income",
          value: data.parent.income,
          key: "fatherIncome",
        },
        {
          label: "Father's Domicile",
          value: data.parent.fatherDomicile,
          key: "fatherDomicile",
        },
        {
          label: "Mother's Domicile",
          value: data.parent.motherDomicile,
          key: "motherDomicile",
        },
        {
          label: "Father's Email",
          value: data.parent.fatherEmail,
          key: "fatherEmail",
        },
        {
          label: "Mother's Email",
          value: data.parent.motherEmail,
          key: "motherEmail",
        },
        {
          label: "Father's Contact",
          value: data.parent.fatherContact,
          key: "fatherContact",
        },
        {
          label: "Mother's Contact",
          value: data.parent.motherContact,
          key: "motherContact",
        },
      ].map(({ label, value, key }) => (
        <Grid item xs={12} sm={6} key={key}>
          <TextField
            label={label}
            value={value || ""}
            fullWidth
            disabled={!editable}
            onChange={
              editable ? (e) => onChange(key, e.target.value) : undefined
            }
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      ))}
    </Grid>
    <Box mt={3}>
      {editable && (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
            onClick={onSave}
          >
            Save Changes
          </Button>
          <Button variant="outlined" color="error" onClick={onCancel}>
            Cancel
          </Button>
        </>
      )}
    </Box>
  </Paper>
);

const AcademicCard = ({ data }) => (
  <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
    <Typography fontWeight={700} fontSize={18} gutterBottom>
      Academic Summary
    </Typography>
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} sm={4}>
        <Typography>
          <b>CGPA:</b> {data.cgpa}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography>
          <b>Credits Earned:</b> {data.credits} / {data.totalCredits}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography>
          <b>Attendance:</b> {data.attendance}
        </Typography>
      </Grid>
    </Grid>
    <Divider />

    <Divider />
    <Box mt={2} mb={2}>
      <Typography variant="h6" gutterBottom>
        Current Courses
      </Typography>
      <Grid container spacing={2}>
        {data.courses.map(({ course, faculty, credits }, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography fontWeight={700}>{course}</Typography>
              <Typography fontSize={14} color="text.secondary">
                {faculty}
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                {credits} Credits
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Paper>
);

const DocumentsCard = ({ documents }) => (
  <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
      Documents
    </Typography>
    <Box sx={{ bgcolor: "#f7f8fa", p: 2, borderRadius: 2 }}>
      <Grid container spacing={2} fontWeight={700} mb={1}>
        <Grid item xs={3}>
          Type
        </Grid>
        <Grid item xs={5}>
          Name
        </Grid>
        <Grid item xs={2}>
          Status
        </Grid>
        <Grid item xs={2}>
          Action
        </Grid>
      </Grid>
      {documents.map(({ name, type, status }, i) => (
        <Grid
          container
          spacing={2}
          alignItems="center"
          key={i}
          sx={{ mb: 1, pb: 1, borderBottom: "1px solid #ddd" }}
        >
          <Grid item xs={3}>
            {type}
          </Grid>
          <Grid item xs={5}>
            {name}
          </Grid>
          <Grid item xs={2}>
            <Chip
              label={status}
              size="small"
              color={
                status === "Approved"
                  ? "success"
                  : status === "Rejected"
                  ? "error"
                  : "warning"
              }
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant={status === "Approved" ? "contained" : "outlined"}
              size="small"
            >
              {status === "Approved" ? "Download" : "Upload"}
            </Button>
          </Grid>
        </Grid>
      ))}
    </Box>
  </Paper>
);

const SecurityCard = () => {
  const [enable2FA, setEnable2FA] = useState(false);
  return (
    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
        Security & Settings
      </Typography>
      <Typography sx={{ mb: 2 }} color="text.secondary">
        Add an extra layer of security
      </Typography>
      <Switch
        color="primary"
        checked={enable2FA}
        onChange={() => setEnable2FA(!enable2FA)}
      />
      Enable 2FA
      <Divider sx={{ mt: 3, mb: 3 }} />
      <Typography variant="subtitle1" fontWeight={600}>
        Password
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" fontSize={13}>
        Last changed on 12 Aug 2024
      </Typography>
      <Button variant="outlined" size="small" sx={{ fontWeight: 600 }}>
        Update
      </Button>
      <Divider sx={{ mt: 3, mb: 3 }} />
      <Typography variant="subtitle1" fontWeight={600}>
        Communication
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary" fontSize={13}>
        Email + SMS
      </Typography>
      <Button variant="outlined" size="small" sx={{ fontWeight: 600 }}>
        Manage
      </Button>
    </Paper>
  );
};

function MainContent({
  activeTab,
  onTabChange,
  personal,
  onPersonalEdit,
  personalEdit,
  onPersonalSave,
  onPersonalCancel,
  onPersonalFieldChange,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", lg: 1100 },
        mx: "auto",
        px: { xs: 2, md: 0 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Typography variant="h5" fontWeight={700} sx={{ mb: 4 }}>
        Student Profile
      </Typography>
      <Tabs
        value={activeTab}
        onChange={(e, val) => onTabChange(val)}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 4 }}
      >
        <Tab label="Personal" />
        <Tab label="Academics" />
        <Tab label="Documents" />
        <Tab label="Security" />
      </Tabs>

      {activeTab === 0 && (
        <ProfileCard
          data={personal}
          editable={personalEdit}
          onEdit={onPersonalEdit}
          onSave={onPersonalSave}
          onCancel={onPersonalCancel}
          onChange={onPersonalFieldChange}
        />
      )}

      {activeTab === 1 && <AcademicCard data={academicDetails} />}
      {activeTab === 2 && <DocumentsCard documents={requiredDocuments} />}
      {activeTab === 3 && <SecurityCard />}
    </Box>
  );
}

export default function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarActive, setSidebarActive] = useState("Profile");
  const [personal, setPersonal] = useState(personalDetailsInitial);
  const [personalEdit, setPersonalEdit] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  function onPersonalFieldChange(key, value) {
    setPersonal((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function onPersonalEdit() {
    setPersonalEdit(true);
  }
  function onPersonalSave() {
    setPersonalEdit(false); /* API call here */
  }
  function onPersonalCancel() {
    setPersonalEdit(false);
    setPersonal(personalDetailsInitial);
  }

  function handleTabChange(newTab) {
    setActiveTab(newTab);
    const tabToMenu = ["Profile", "Academics", "Documents", "Security"];
    setSidebarActive(tabToMenu[newTab]);
  }

  function handleMenuChange(label) {
    setSidebarActive(label);
    const menuToTab = {
      Profile: 0,
      Academics: 1,
      Documents: 2,
      Security: 3,
    };
    setActiveTab(menuToTab[label] || 0);
  }

  function handleLogout() {
    // Logout logic here
  }

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f2f4fa",
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#303030",
      }}
    >
      {/* Sidebar */}
      <Sidebar
        active={sidebarActive}
        onChange={handleMenuChange}
        expanded={sidebarExpanded}
      />

      {/* Main content with margin left to avoid overlap */}
      <Box
        sx={{
          flex: 1,
          ml: sidebarExpanded ? "260px" : "70px",
          mt: "64px",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Pass the toggle handler to TopBar */}
        <TopBar
          user={personal}
          onLogout={handleLogout}
          onToggleSidebar={() => setSidebarExpanded((exp) => !exp)}
        />
        <MainContent
          activeTab={activeTab}
          onTabChange={handleTabChange}
          personal={personal}
          personalEdit={personalEdit}
          onPersonalEdit={onPersonalEdit}
          onPersonalSave={onPersonalSave}
          onPersonalCancel={onPersonalCancel}
          onPersonalFieldChange={onPersonalFieldChange}
        />
      </Box>
    </Box>
  );
}
