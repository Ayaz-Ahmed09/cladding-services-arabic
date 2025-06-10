"use client"
import { ChevronDown, Home, Phone, FileText, Building2, Award, Layers } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "الرئيسية",
    icon: Home,
    url: "#",
  },
  {
    title: "خدماتنا المتخصصة",
    icon: Layers,
    url: "#",
    submenu: [
      { title: "الواجهات الزجاجية المتقدمة", url: "#" },
      { title: "الكسوة المعدنية الحديثة", url: "#" },
      { title: "الواجهات الحجرية الطبيعية", url: "#" },
      { title: "الأنظمة المركبة المبتكرة", url: "#" },
      { title: "الصيانة والترميم المتخصص", url: "#" },
    ],
  },
  {
    title: "معرض الأعمال",
    icon: Award,
    url: "#",
  },
  {
    title: "تواصل معنا",
    icon: Phone,
    url: "#",
  },
  {
    title: "استشارة مجانية",
    icon: FileText,
    url: "#",
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <div className="h-full bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--dark)]">
        <SidebarHeader className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-4 px-6 py-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] rounded-xl flex items-center justify-center shadow-xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white">الكسوة المتقدمة</span>
              <span className="text-sm text-white/70">حلول معمارية احترافية</span>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-300">متاح الآن</span>
              </div>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-3 py-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.submenu ? (
                      <Collapsible className="group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full text-white hover:bg-white/10 transition-all duration-300 rounded-xl py-3 px-4 group-hover:scale-[1.02]">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium text-sm">{item.title}</span>
                            <ChevronDown className="mr-auto h-4 w-4 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="transition-all duration-300 ease-in-out">
                          <SidebarMenuSub className="mr-6 mt-2 space-y-1">
                            {item.submenu.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className="text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-lg py-2 px-3 text-xs border-r-2 border-transparent hover:border-[var(--accent)]"
                                >
                                  <a href={subItem.url}>{subItem.title}</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        className="text-white hover:bg-white/10 transition-all duration-300 rounded-xl py-3 px-4 hover:scale-[1.02]"
                      >
                        <a href={item.url} className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium text-sm">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-white/10 pt-6 px-6">
          <Button className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] hover:from-[var(--gold)] hover:to-[var(--accent)] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            احجز استشارة فورية
          </Button>
          <div className="text-center mt-3">
            <div className="text-white/60 text-xs">اتصل الآن</div>
            <div className="text-white font-bold text-lg">+966 50 123 4567</div>
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}
