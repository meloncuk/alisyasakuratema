import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { Image } from "@/components/ui/image";

const BG_IMG = "https://media.base44.com/images/public/6ab42e4cfcbdddcd263ea556/5557029b2_generated_edfabf78.jpg";

const MOODS = [
  { value: "Warm", desc: "Aardse tinten, gebroken wit en oker", color: "hsl(30 45% 60%)" },
  { value: "Koel", desc: "Salie, leisteen en zacht noorderlicht", color: "hsl(200 15% 55%)" },
  { value: "Gedurfd", desc: "Diep pigment, contrast en karakter", color: "hsl(280 30% 40%)" },
];

const SPACES = ["Woonkamer", "Slaapkamer", "Keuken", "Kantoor", "Gehele woning"];

export default function ColorAdvice() {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState(null);
  const [space, setSpace] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email) {
      setError("Vul minimaal uw naam en e-mailadres in.");
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setDone(true);
    } catch (err) {
      setError("Er ging iets mis bij het versturen. Probeer het later opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kleuradvies" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden order-2 lg:order-1 grain">
            <Image
              src={BG_IMG}
              alt="Sereen Nederlands interieur met diep blauwe accentmuur"
              fittingType="fill"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white/90 text-sm tracking-[0.2em] uppercase vertical-text hidden sm:block">
              Kleuradvies op maat
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Kleuradvies</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 mb-8 text-balance">
              Welke sfeer zoekt u?
            </h2>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "hsl(18 49% 51%)" }}>
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl mb-3">Dank u wel, {form.name.split(" ")[0]}</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Wij hebben uw aanvraag ontvangen. Binnen 24 uur ontvangt u een persoonlijk kleurvoorstel van Alisya in uw mailbox.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="stepper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center gap-2 mb-8">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`h-px flex-1 transition-colors duration-500 ${
                          i <= step ? "bg-foreground" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="mood"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <p className="text-lg mb-6">Kies de sfeer die bij uw ruimte past</p>
                        <div className="space-y-3">
                          {MOODS.map((m) => (
                            <button
                              key={m.value}
                              onClick={() => {
                                setMood(m.value);
                                setTimeout(next, 300);
                              }}
                              className={`w-full flex items-center gap-4 p-4 rounded-sm border text-left transition-all duration-300 ${
                                mood === m.value
                                  ? "border-foreground bg-foreground/5"
                                  : "border-border hover:border-foreground/40"
                              }`}
                            >
                              <span className="w-10 h-10 rounded-full shrink-0" style={{ backgroundColor: m.color }} />
                              <span>
                                <span className="block font-heading text-xl">{m.value}</span>
                                <span className="block text-sm text-muted-foreground">{m.desc}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="space"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <p className="text-lg mb-6">Welke ruimte wilt u transformeren?</p>
                        <div className="flex flex-wrap gap-3">
                          {SPACES.map((s) => (
                            <button
                              key={s}
                              onClick={() => {
                                setSpace(s);
                                setTimeout(next, 300);
                              }}
                              className={`px-5 py-3 rounded-full border text-sm tracking-wide transition-all duration-300 ${
                                space === s
                                  ? "border-foreground bg-foreground text-background"
                                  : "border-border hover:border-foreground/40"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-8">
                          <button onClick={back} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Terug
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <p className="text-lg mb-2">Uw gegevens voor een persoonlijk voorstel</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Naam *"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 bg-transparent border border-border rounded-sm focus:outline-none focus:border-foreground"
                          />
                          <input
                            type="email"
                            placeholder="E-mailadres *"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 bg-transparent border border-border rounded-sm focus:outline-none focus:border-foreground"
                          />
                        </div>
                        <input
                          type="tel"
                          placeholder="Telefoonnummer"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-transparent border border-border rounded-sm focus:outline-none focus:border-foreground"
                        />
                        <textarea
                          placeholder="Vertel ons over uw project (optioneel)"
                          rows={3}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 bg-transparent border border-border rounded-sm focus:outline-none focus:border-foreground resize-none"
                        />
                        {error && <p className="text-sm text-destructive">{error}</p>}
                        <div className="flex items-center justify-between gap-3 pt-2">
                          <button type="button" onClick={back} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Terug
                          </button>
                          <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm uppercase tracking-[0.2em] disabled:opacity-60 transition-transform hover:scale-105"
                            style={{ backgroundColor: "hsl(18 49% 51%)" }}
                          >
                            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Verstuur aanvraag <ArrowRight className="w-4 h-4" /></>}
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}