import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  UserCheck, 
  MapPin, 
  Info, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  Search,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const slides = [
  {
    title: "ลงทะเบียนเลือกตั้งล่วงหน้า 2569",
    subtitle: "สิทธิของคุณ กำหนดอนาคตประเทศไทย",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-2xl border border-primary/10">
          <div className="bg-primary text-primary-foreground p-3 rounded-xl">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">เดดไลน์การลงทะเบียน</p>
            <p className="text-xl font-bold text-primary">ภายในวันที่ 5 มกราคม 2569</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-green-500/20 text-green-600 p-1 rounded-full">
              <UserCheck className="w-4 h-4" />
            </div>
            <p className="text-lg">ลงทะเบียนใช้สิทธินอกเขต / นอกราชอาณาจักร</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-blue-500/20 text-blue-600 p-1 rounded-full">
              <BookOpen className="w-4 h-4" />
            </div>
            <p className="text-lg">ลงทะเบียนออกเสียงประชามติแก้ รธน.</p>
          </div>
        </div>
        <Button 
          className="w-full py-6 text-lg rounded-xl hover-elevate group"
          onClick={() => window.open('https://boraservices.bora.dopa.go.th/election/outvote/', '_blank')}
        >
          ลงทะเบียนออนไลน์ที่นี่
          <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    ),
    color: "from-blue-50 to-indigo-50",
    icon: <MapPin className="w-12 h-12 text-primary/20" />
  },
  {
    title: "บันทึกวันเลือกตั้ง",
    subtitle: "เตรียมตัวให้พร้อมสำหรับ 2 วันสำคัญ",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
          <div className="text-center min-w-[80px]">
            <span className="block text-sm text-muted-foreground uppercase tracking-wider">กุมภาพันธ์</span>
            <span className="block text-4xl font-black text-primary">01</span>
          </div>
          <div className="flex-1">
            <Badge variant="outline" className="mb-1">วันอาทิตย์</Badge>
            <h3 className="font-bold text-xl">วันเลือกตั้งสมาชิกสภาผู้แทนราษฎร</h3>
            <p className="text-sm text-muted-foreground">ไปใช้สิทธิ ณ หน่วยที่ลงทะเบียนไว้</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-12 -mt-12" />
          <div className="text-center min-w-[80px]">
            <span className="block text-sm text-muted-foreground uppercase tracking-wider">กุมภาพันธ์</span>
            <span className="block text-4xl font-black text-orange-600">08</span>
          </div>
          <div className="flex-1">
            <Badge variant="outline" className="mb-1 border-orange-200 text-orange-600">วันอาทิตย์</Badge>
            <h3 className="font-bold text-xl">วันออกเสียงประชามติแก้ รธน.</h3>
            <p className="text-sm text-muted-foreground">ออกเสียงเพื่อการเปลี่ยนแปลงรัฐธรรมนูญ</p>
          </div>
        </div>
      </div>
    ),
    color: "from-emerald-50 to-teal-50",
    icon: <Calendar className="w-12 h-12 text-emerald-600/20" />
  },
  {
    title: "สิ่งที่ต้องเตรียม",
    subtitle: "ข้อมูลสำคัญที่ต้องใช้ในการลงทะเบียน",
    content: (
      <div className="space-y-4">
        <Card className="border-none bg-white/60 backdrop-blur-sm shadow-md">
          <CardContent className="p-6">
            <div className="flex gap-4 items-start">
              <div className="bg-amber-100 p-3 rounded-xl">
                <Search className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">หารหัสประจำบ้านไม่เจอ?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  ไม่ต้องกังวล! คุณสามารถตรวจสอบรหัสประจำบ้านได้จาก:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>หน้าแรกของทะเบียนบ้าน (เล่มสีน้ำเงิน)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>แอปพลิเคชัน <span className="font-bold text-primary">ThaID</span> (สะดวกที่สุด)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="bg-primary/10 p-4 rounded-xl flex items-center gap-3">
          <Info className="w-5 h-5 text-primary" />
          <p className="text-sm font-medium">เตรียมบัตรประชาชนตัวจริงให้พร้อมก่อนเริ่ม</p>
        </div>
      </div>
    ),
    color: "from-amber-50 to-orange-50",
    icon: <UserCheck className="w-12 h-12 text-amber-600/20" />
  }
];

export default function ElectionGuide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20 flex items-center justify-center p-4">
      <div className="max-w-xl w-full relative">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6 px-2">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">ELECTION <span className="text-primary">2026</span></h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Thailand Voting Guide</p>
            </div>
            <div className="flex gap-1">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-slate-200"}`}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 border border-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`bg-gradient-to-br ${slides[currentSlide].color} p-8 min-h-[500px] flex flex-col`}
              >
                <div className="mb-8 relative">
                  <div className="absolute -top-4 -right-4">
                    {slides[currentSlide].icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-slate-600 font-medium">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>

                <div className="flex-1">
                  {slides[currentSlide].content}
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={prevSlide}
                    className="rounded-full hover:bg-white/50"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  
                  <Button 
                    onClick={nextSlide}
                    className="rounded-full px-6 font-bold shadow-lg shadow-primary/20"
                  >
                    {currentSlide === slides.length - 1 ? "ดูอีกรอบ" : "ถัดไป"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <p className="mt-8 text-center text-slate-400 text-sm">
            จัดทำขึ้นเพื่อประชาสัมพันธ์ข้อมูลการเลือกตั้งล่วงหน้าปี 2569
          </p>
        </div>
      </div>
    </div>
  );
}
