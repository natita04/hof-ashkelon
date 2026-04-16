import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function App() {
  const [name, setName] = useState("")
  const [department, setDepartment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (name && department) setSubmitted(true)
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <img
            src="/logo.png"
            alt="לוגו מועצה אזורית חוף אשקלון"
            className="w-12 h-12 object-contain mix-blend-multiply"
          />
          <h1 className="text-xl font-bold text-gray-800">
            מועצה אזורית חוף אשקלון
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-lg mx-auto px-6 py-12">
        <div className="bg-white rounded-xl border shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">דוגמת טופס</h2>
          <p className="text-muted-foreground text-sm mb-8">
            דוגמה לרכיבי shadcn/ui — תיבת טקסט, תפריט נפתח וכפתור
          </p>

          <div className="space-y-6">
            {/* Text input */}
            <div className="space-y-2">
              <Label htmlFor="name">שם מלא</Label>
              <Input
                id="name"
                placeholder="הכנס שם מלא..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Dropdown */}
            <div className="space-y-2">
              <Label>מחלקה</Label>
              <Select onValueChange={setDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="בחר מחלקה..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="education">חינוך</SelectItem>
                  <SelectItem value="welfare">רווחה</SelectItem>
                  <SelectItem value="engineering">הנדסה</SelectItem>
                  <SelectItem value="finance">כספים</SelectItem>
                  <SelectItem value="environment">איכות הסביבה</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Button onClick={handleSubmit} disabled={!name || !department}>
                שלח פנייה
              </Button>
              <Button
                variant="outline"
                onClick={() => { setName(""); setDepartment(""); setSubmitted(false) }}
              >
                נקה
              </Button>
            </div>

            {/* Result */}
            {submitted && (
              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary font-medium">
                ✓ הפנייה נשלחה בהצלחה עבור <strong>{name}</strong> — מחלקת{" "}
                {department === "education" ? "חינוך"
                  : department === "welfare" ? "רווחה"
                  : department === "engineering" ? "הנדסה"
                  : department === "finance" ? "כספים"
                  : "איכות הסביבה"}
              </div>
            )}
          </div>
        </div>

        {/* Component legend */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
          <div className="bg-white border rounded-lg p-3">
            <div className="font-semibold text-foreground mb-1">Input</div>
            תיבת טקסט
          </div>
          <div className="bg-white border rounded-lg p-3">
            <div className="font-semibold text-foreground mb-1">Select</div>
            תפריט נפתח
          </div>
          <div className="bg-white border rounded-lg p-3">
            <div className="font-semibold text-foreground mb-1">Button</div>
            כפתור
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
