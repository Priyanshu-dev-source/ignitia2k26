    import { useState } from "react";
    import { Button } from "@/components/ui/button";
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
    import { Textarea } from "@/components/ui/textarea";
    import { Input } from "@/components/ui/input";
    import { toast } from "sonner";

const FeedbackSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !feedback) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thank you for your feedback!");
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <section id="feedback" className="py-16 px-6 bg-background/30 text-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-golden mb-4 text-center">
          Feedback
        </h2>
        <p className="font-rajdhani text-lg text-foreground/80 text-center mb-12">
          Share Your Thoughts About IGNITIA
        </p>

        <Card className="bg-background/50 border-golden/30">
          <CardHeader>
            <CardTitle className="font-orbitron text-2xl text-golden text-center">
              We Value Your Opinion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-rajdhani text-sm text-foreground/90 font-semibold">
                  Name
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-background/50 border-golden/30 focus:border-golden font-rajdhani"
                />
              </div>

              <div className="space-y-2">
                <label className="font-rajdhani text-sm text-foreground/90 font-semibold">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-golden/30 focus:border-golden font-rajdhani"
                />
              </div>

              <div className="space-y-2">
                <label className="font-rajdhani text-sm text-foreground/90 font-semibold">
                  Your Feedback
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what you think about IGNITIA..."
                  rows={6}
                  className="bg-background/50 border-golden/30 focus:border-golden font-rajdhani resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-golden text-background hover:bg-golden/90 font-rajdhani font-semibold text-lg py-6"
              >
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeedbackSection;
