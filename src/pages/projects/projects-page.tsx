import { IsLoggedRole } from "../../components/consts/helpers";
import { AdminProjects } from "./admin-projects-page";
import { UsersProjects } from "./users-projects-page";

export const Projects = () => {
  return (
    <>
      {IsLoggedRole("admin") ? <AdminProjects /> : <UsersProjects />}
    </>
  );
};