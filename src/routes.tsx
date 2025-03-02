
import { createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import Jobs from "@/pages/Jobs";
import Content from "@/pages/Content";
import ContentItem from "@/pages/ContentItem";
import CreateContent from "@/pages/CreateContent";
import Groups from "@/pages/Groups";
import Auth from "@/pages/Auth";
import Pricing from "@/pages/Pricing";
import CandidateProfile from "@/pages/CandidateProfile";
import RecruiterProfile from "@/pages/RecruiterProfile";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import UserPermissions from "@/pages/admin/UserPermissions";
import Documentation from "@/pages/Documentation";
import AllCourses from "@/pages/AllCourses";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/jobs/:id",
    element: <Jobs />,
  },
  {
    path: "/courses",
    element: <AllCourses />,
  },
  {
    path: "/courses/:id",
    element: <ContentItem />,
  },
  {
    path: "/content",
    element: <Content />,
  },
  {
    path: "/content/:id",
    element: <ContentItem />,
  },
  {
    path: "/content/create",
    element: (
      <ProtectedRoute>
        <CreateContent />
      </ProtectedRoute>
    ),
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/profile/candidate",
    element: (
      <ProtectedRoute>
        <CandidateProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile/recruiter",
    element: (
      <ProtectedRoute>
        <RecruiterProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/permissions",
    element: (
      <ProtectedRoute>
        <UserPermissions />
      </ProtectedRoute>
    ),
  },
  {
    path: "/freelancers",
    element: <Jobs />,
  },
  {
    path: "/ai-agents",
    element: <Jobs />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
  },
]);

export default router;
