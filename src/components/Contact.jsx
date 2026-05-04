import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const formatDate = (date = new Date()) => {
    const pad = (n) => n.toString().padStart(2, "0");

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const Contact = () => {
    const createChallenge = () => ({
        a: Math.floor(Math.random() * 12) + 1,
        b: Math.floor(Math.random() * 10) + 1,
    });
    const [captcha, setCaptcha] = useState(createChallenge);
    const [startTime, setStartTime] = useState(0);
    const honeypotRef = useRef(null);
    const [userInput, setUserInput] = useState("");
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const generateNewChallenge = () => {
        setCaptcha({
            a: Math.floor(Math.random() * 12) + 1,
            b: Math.floor(Math.random() * 10) + 1,
        });
        setUserInput("");
        setStartTime(Date.now());
    };

    //validation
    const validate = () => {
        const newErrors = {};

        if (!name) newErrors.name = "Your name is required";
        if (!email) newErrors.email = "Your email is required";
        if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
        if (!service) newErrors.service = "Service you want is required";
        if (!message) newErrors.message = "How we can help you is required";
        if (!userInput) newErrors.userInput = "Verify that you are not a robot";

        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (honeypotRef.current && honeypotRef.current.value !== "") {
            return;
        }

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const timeTaken = (Date.now() - startTime) / 1000;
        if (timeTaken < 3) {
            toast.error("Submission too fast. Please verify you are human.");
            return;
        }

        if (parseInt(userInput) !== captcha.a + captcha.b) {
            toast.error("Security answer is incorrect.");
            generateNewChallenge();
            return;
        }

        const form = formRef.current;

        const timeInput = form.querySelector('input[name="time"]');
        timeInput.value = formatDate();

        setLoading(true);

        emailjs
            .sendForm(
                "service_xujjtol",
                "template_n6t7mk8",
                formRef.current,
                "AxJx4RzciOUiKAZCr",
            )
            .then(() => {
                toast.success("Message sent successfully!");
                form.reset();
            })
            .finally(() => {
                setLoading(false);
                setName("");
                setEmail("");
                setPhoneNumber("");
                setService("");
                setMessage("");
                setErrors({});
                setUserInput("");
            });
    };
    return (
        <div className="pt-32 pb-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-slate-600">
                        Have a complex tax situation? Our experts are ready to
                        assist you. Fill out the form below or reach out to us
                        via phone.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                            <PhoneCall className="text-blue-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">
                                    Call Us
                                </h4>
                                <p className="text-slate-600">
                                    +250 794 687 416
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                            <Mail className="text-blue-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">
                                    Email Us
                                </h4>
                                <p className="text-slate-600">
                                    makabeimprovement2025@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                            <MapPin className="text-blue-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">
                                    Visit Us
                                </h4>
                                <p className="text-slate-600">
                                    Kigali City, Nyarugenge District, Nyarugenge
                                    Sector, Kiyovu Cell near Inkuru Nziza Church
                                    KN 83
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-lg">
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="space-y-6"
                        >
                            <div className="opacity-0 absolute -z-10 h-0 overflow-hidden">
                                <label>Leave this field blank</label>
                                <input
                                    ref={honeypotRef}
                                    type="hidden"
                                    name="mid_name_verification"
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>
                            <input
                                type="hidden"
                                name="title"
                                value="Client inquiry"
                            />
                            <input
                                type="hidden"
                                name="time"
                                value={formatDate()}
                            />
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="Enter your name"
                                        name="name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        value={name}
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="Enter your email address"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-1 gap-6">
                                <div className="flex flex-col gap-1">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        name="phonenumber"
                                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="Enter your phone number"
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                        value={phoneNumber}
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-xs text-red-500">
                                            {errors.phoneNumber}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Service Needed
                                </label>
                                <select
                                    name="service"
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition cursor-pointer"
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                >
                                    <option value="">
                                        Select service you need
                                    </option>
                                    <option value="Accounting, Bookkeeping & Auditing Activities, Tax Consultancy">
                                        Accounting, Bookkeeping & Auditing
                                        Activities, Tax Consultancy
                                    </option>
                                    <option value="Business Consultancy">
                                        Business Consultancy
                                    </option>
                                    <option value="Activities of Head Offices">
                                        Activities of Head Offices
                                    </option>
                                    <option value="Management Consultancy Activities">
                                        Management Consultancy Activities
                                    </option>
                                    <option value="General Cleaning of Building">
                                        General Cleaning of Building
                                    </option>
                                    <option value="General Supply">
                                        General Supply
                                    </option>
                                    <option value="Project Management">
                                        Project Management
                                    </option>
                                </select>
                                {errors.service && (
                                    <p className="text-xs text-red-500">
                                        {errors.service}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                    placeholder="How can we help?"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-xs text-red-500">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            {/* --- SECURITY LAYER: MATH CHALLENGE --- */}
                            <div className="flex flex-wrap gap-3 items-center p-5 rounded-2xl ">
                                <label className="block text-sm font-bold text-black">
                                    Security question: Solve {captcha.a} +{" "}
                                    {captcha.b} =
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="text"
                                        value={userInput}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^\d*$/.test(value)) {
                                                setUserInput(value);
                                            }
                                        }}
                                        maxLength={5}
                                        className="w-24 px-4 py-2 rounded-xl border border-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder=""
                                    />
                                    {parseInt(userInput) ===
                                        captcha.a + captcha.b && (
                                        <span className="text-green-500 font-bold text-sm">
                                            ✓ Human Verified
                                        </span>
                                    )}
                                    {parseInt(userInput) !=
                                        captcha.a + captcha.b &&
                                        errors.userInput && (
                                            <span className="text-xs text-red-500">
                                                {errors.userInput}
                                            </span>
                                        )}
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-50 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition cursor-pointer"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
