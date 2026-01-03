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
    subtitle: "เตรียมตัวให้พร้อมสำหรับวันสำคัญเหล่านี้",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
          <div className="text-center min-w-[80px]">
            <span className="block text-sm text-muted-foreground uppercase tracking-wider">กุมภาพันธ์</span>
            <span className="block text-4xl font-black text-primary">01</span>
          </div>
          <div className="flex-1">
            <Badge variant="outline" className="mb-1 bg-blue-50 border-blue-200 text-blue-600">เลือกตั้งล่วงหน้า</Badge>
            <h3 className="font-bold text-xl">วันเลือกตั้ง สส. (ล่วงหน้า)</h3>
            <p className="text-sm text-muted-foreground">สำหรับผู้ลงทะเบียนเลือกตั้งล่วงหน้าเท่านั้น</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-12 -mt-12" />
          <div className="text-center min-w-[80px]">
            <span className="block text-sm text-muted-foreground uppercase tracking-wider">กุมภาพันธ์</span>
            <span className="block text-4xl font-black text-emerald-600">08</span>
          </div>
          <div className="flex-1">
            <Badge variant="outline" className="mb-1 border-emerald-200 text-emerald-600">เลือกตั้งปกติ</Badge>
            <h3 className="font-bold text-xl">วันเลือกตั้ง สส. (ทั่วไป)</h3>
            <p className="text-sm text-muted-foreground">สำหรับผู้ใช้สิทธิในเขตทะเบียนบ้านตนเอง</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-12 -mt-12" />
          <div className="text-center min-w-[80px]">
            <span className="block text-sm text-muted-foreground uppercase tracking-wider">กุมภาพันธ์</span>
            <span className="block text-4xl font-black text-orange-600">08</span>
          </div>
          <div className="flex-1">
            <Badge variant="outline" className="mb-1 border-orange-200 text-orange-600">ประชามติ</Badge>
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
    subtitle: "เตรียมข้อมูลเหล่านี้ให้พร้อมก่อนลงทะเบียน",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm flex items-center gap-4">
            <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="font-bold text-slate-800">ข้อมูลในบัตรประชาชน</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm flex items-center gap-4">
            <div className="bg-indigo-100 p-2.5 rounded-xl text-indigo-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="font-bold text-slate-800">รหัสประจำบ้าน</div>
          </div>
        </div>

        <Card className="border-none bg-amber-50/50 backdrop-blur-sm shadow-sm border border-amber-100">
          <CardContent className="p-5">
            <div className="flex gap-3 items-start">
              <div className="bg-amber-100 p-2 rounded-lg mt-1 flex flex-col items-center gap-1">
                <Search className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Note: หากหารหัสประจำบ้านไม่เจอ</h4>
                <p className="text-sm text-amber-800/80 leading-relaxed mb-3">
                  สามารถตรวจสอบได้จาก <strong>หน้าแรกของทะเบียนบ้าน</strong> หรือดูผ่านแอปพลิเคชัน <strong>ThaID</strong> ได้ทันที
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 text-xs border-amber-200 bg-amber-100/50 hover:bg-amber-100 text-amber-900"
                    onClick={() => window.open('https://boraservices.bora.dopa.go.th/election/outvote/', '_blank')}
                  >
                    <ExternalLink className="mr-2 w-3 h-3" />
                    ไปยังหน้าลงทะเบียน
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 text-xs text-amber-700 hover:text-amber-900 hover:bg-amber-100/50"
                    onClick={() => window.open('https://election69.peoplesparty.or.th/', '_blank')}
                  >
                    <Search className="mr-2 w-3 h-3" />
                    ค้นหารายชื่อ สส.ได้ที่
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    color: "from-amber-50 to-orange-50",
    icon: <Search className="w-12 h-12 text-amber-600/20" />
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
