import Banner from "@/components/Banner/Banner";
import CompanyGuest from "@/components/CompanyProject/CompanyGuest";
import CompanyProject from "@/components/CompanyProject/CompanyProject";
import Contact from "@/components/Contact/Contact";
import Section from "@/components/Section/Section";
import ListCompanyService from "@/components/Service/ListCompanyService";
import ListService from "@/components/Service/ListService";

export default function Home() {
  return (
    <div className="h-screen" id="#home" >
      <Banner />
      <Section
        title="Dịch vụ"
        backgroundUrl="/images/banner_service.jpg"
        id="#us"
      >
        <ListService />
        <ListCompanyService />
      </Section>

      <Section
        title="Kho giao diện"
        backgroundUrl="/images/background_themes.jpg"
        id="#layouts"
      >

      </Section>

      <Section
        title="Dự án chúng tôi đã thực hiện"
        backgroundUrl="/images/project_theme.jpg"
        id="#team"
      >
       <CompanyProject />
       <CompanyGuest />
      </Section>
      <Contact />
    </div>
  )
}
