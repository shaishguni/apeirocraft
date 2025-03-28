"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "./Footer";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(255),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(255),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Please select a subject").max(255),
  message: z.string().min(1, "Message is required"),
});

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const { firstName, lastName, email, subject, message } = values;
    
    // Create mailto link with form data
    const mailToLink = `mailto:gunishaish@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello I am ${firstName} ${lastName}, my Email is ${email}.\n\n${message}`)}`;

    // Simulate a delay and then open the mail client
    setTimeout(() => {
      window.location.href = mailToLink;
      form.reset(); // Reset form after submission
      alert("Thank you for your message. We'll get back to you soon!");
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <section id="contact" className="container relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-primary mb-2 tracking-wider">
            Contact
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We value your inquiries and look forward to collaborating with you. Please reach out with any questions or service requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Section */}
          <div className="bg-muted/30 dark:bg-muted/10 p-6 rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Our Location</div>
                  <div className="text-muted-foreground mt-1">Kathmandu, Nepal</div>
                </div>
              </div> 

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Email Us</div>
                  <div className="text-muted-foreground mt-1">gunishaish@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Office Hours</div>
                  <div className="text-muted-foreground mt-1">
                    <div className="flex justify-between"><span>Monday - Thursday:</span> <span className="ml-2">5PM - 9PM</span></div>
                    <div className="flex justify-between"><span>Friday - Saturday:</span> <span className="ml-2">9AM - 10PM</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-md border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid w-full gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter first name" {...field} className="focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter last name" {...field} className="focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                            className="focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="focus:ring-primary">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            <SelectItem value="Pitch Deck">Pitch Deck</SelectItem>
                            <SelectItem value="Partnership Inquiry">Partnership Inquiry</SelectItem>
                            <SelectItem value="Web Development">Web Development</SelectItem>
                            <SelectItem value="Content Creation">Content Creation</SelectItem>
                            <SelectItem value="SMMA">SMMA</SelectItem>
                            <SelectItem value="SAAS">SAAS</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Type your message here..."
                            className="resize-none focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="mt-2 w-full transition-all hover:shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="mt-20">
        <Footer />
      </footer>
    </section>
  );
};