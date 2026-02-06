import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Activity, Droplet, Wind, Calendar, User, Bell, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      title: "Daily Goal Achieved",
      message: "You've reached your step goal of 8,000 steps today!",
      time: "5 min ago",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 2,
      type: "warning",
      icon: AlertCircle,
      title: "High Stress Detected",
      message: "Your heart rate variability indicates elevated stress. Consider taking a break.",
      time: "1 hour ago",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: 3,
      type: "info",
      icon: Info,
      title: "Appointment Reminder",
      message: "You have an appointment with Dr. Sarah Johnson today at 3:00 PM.",
      time: "2 hours ago",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 4,
      type: "success",
      icon: CheckCircle,
      title: "Sleep Quality Good",
      message: "You had 7.5 hours of quality sleep last night. Keep it up!",
      time: "8 hours ago",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 5,
      type: "info",
      icon: Info,
      title: "Hydration Reminder",
      message: "Don't forget to drink water. You're at 6/8 cups today.",
      time: "3 hours ago",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ];
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold gradient-text mb-2">Heart Overview</h1>
              <p className="text-muted-foreground">Real-time health monitoring dashboard</p>
            </div>
            <Button variant="hero" onClick={() => setShowNotifications(true)}>
              <Bell className="w-4 h-4 mr-2" />
              Notifications
              <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                {notifications.length}
              </span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Heart Rate Card */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    Heart Rate Monitor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-4xl font-bold text-rose-500">72 BPM</div>
                      <div className="text-sm text-muted-foreground">Normal Range</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Avg Today</div>
                      <div className="text-2xl font-bold">75 BPM</div>
                    </div>
                  </div>
                  <div className="h-32 relative bg-black/20 rounded-lg p-4">
                    {/* ECG Grid Background */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="h-full w-full" style={{
                        backgroundImage: 'linear-gradient(0deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>
                    
                    {/* Heart Rate Wave */}
                    <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 L50,50 L55,30 L60,70 L65,20 L70,50 L120,50 L125,30 L130,70 L135,20 L140,50 L190,50 L195,30 L200,70 L205,20 L210,50 L260,50 L265,30 L270,70 L275,20 L280,50 L330,50 L335,30 L340,70 L345,20 L350,50 L400,50 L405,30 L410,70 L415,20 L420,50 L470,50 L475,30 L480,70 L485,20 L490,50 L540,50 L545,30 L550,70 L555,20 L560,50 L610,50 L615,30 L620,70 L625,20 L630,50 L680,50 L685,30 L690,70 L695,20 L700,50 L750,50 L755,30 L760,70 L765,20 L770,50 L800,50"
                        fill="none"
                        stroke="rgb(239, 68, 68)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    </svg>
                    
                    {/* Animated scanning line */}
                    <div className="absolute top-0 bottom-0 w-px bg-rose-500 animate-scan" style={{
                      animation: 'scan 3s linear infinite'
                    }}></div>
                  </div>
                  
                  <style>{`
                    @keyframes scan {
                      0% { left: 0; }
                      100% { left: 100%; }
                    }
                  `}</style>
                </CardContent>
              </Card>

              {/* Body Vitals Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Droplet className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Blood Oxygen</div>
                        <div className="text-2xl font-bold">98%</div>
                      </div>
                    </div>
                    <Progress value={98} className="h-2" />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Temperature</div>
                        <div className="text-2xl font-bold">98.6°F</div>
                      </div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Wind className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Respiration</div>
                        <div className="text-2xl font-bold">16/min</div>
                      </div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </CardContent>
                </Card>
              </div>

              {/* Body Condition Images */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>My Body Condition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-full aspect-square bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-lg mb-2 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=200&h=200&fit=crop" 
                          alt="Heart" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">Heart</div>
                    </div>
                    <div className="text-center">
                      <div className="w-full aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-2 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop" 
                          alt="Lungs" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">Lungs</div>
                    </div>
                    <div className="text-center">
                      <div className="w-full aspect-square bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg mb-2 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=200&h=200&fit=crop" 
                          alt="Liver" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">Liver</div>
                    </div>
                    <div className="text-center">
                      <div className="w-full aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-2 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop" 
                          alt="Kidney" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">Kidney</div>
                    </div>
                    <div className="text-center">
                      <div className="w-full aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg mb-2 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=200&h=200&fit=crop" 
                          alt="Brain" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">Brain</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-sm">Daily Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Steps</span>
                    <span className="font-bold">8,432</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Calories</span>
                    <span className="font-bold">342 kcal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sleep</span>
                    <span className="font-bold">7h 30m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Water</span>
                    <span className="font-bold">6/8 cups</span>
                  </div>
                </CardContent>
              </Card>

              {/* Appointments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    My Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Dr. Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">Cardiologist</div>
                    </div>
                    <div className="text-xs text-blue-500">Today</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-rose-500/10 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-rose-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Dr. Michael Chen</div>
                      <div className="text-xs text-muted-foreground">General Physician</div>
                    </div>
                    <div className="text-xs text-rose-500">Tomorrow</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Dr. Emily Brown</div>
                      <div className="text-xs text-muted-foreground">Nutritionist</div>
                    </div>
                    <div className="text-xs text-orange-500">Fri, 10 AM</div>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar Widget */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-sm">
                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 text-center text-xs">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="text-muted-foreground font-semibold">{day}</div>
                    ))}
                    {(() => {
                      const today = new Date();
                      const currentDay = today.getDate();
                      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
                      const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
                      const days = [];
                      
                      // Empty cells for days before month starts
                      for (let i = 0; i < firstDay; i++) {
                        days.push(<div key={`empty-${i}`} className="p-2"></div>);
                      }
                      
                      // Days of the month
                      for (let i = 1; i <= daysInMonth; i++) {
                        days.push(
                          <div 
                            key={i} 
                            className={`p-2 rounded ${
                              i === currentDay 
                                ? 'bg-primary text-primary-foreground' 
                                : 'hover:bg-muted'
                            }`}
                          >
                            {i}
                          </div>
                        );
                      }
                      
                      return days;
                    })()}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
        <DialogContent className="glass-card max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
              <Bell className="w-6 h-6" />
              Notifications
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg ${notification.bgColor} border border-transparent hover:border-primary/20 transition-all cursor-pointer`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`${notification.color} mt-1`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-sm">{notification.title}</h4>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full" onClick={() => setShowNotifications(false)}>
              Mark All as Read
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </main>
  );
};

export default Dashboard;
