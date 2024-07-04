
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <div>Inside the dashboard layout</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
