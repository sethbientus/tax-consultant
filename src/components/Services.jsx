import {
    BarChart3,
    BrushCleaning,
    Building2,
    CalendarCheck,
    CheckSquare,
    ClipboardList,
    DotSquare,
    SendHorizonal,
    Target,
    Truck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const Services = () => {
    return (
        <section className="py-30 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-blue-600 font-bold tracking-widest text-md mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-2xl font-bold text-slate-900">
                        Comprehensive Services
                    </h3>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mt-4 mb-10">
                    <span className="font-bold">MAKABE Improvement Supply</span>{" "}
                    has capability to provide different services which are:{" "}
                    <p className="font-bold">
                        <ul className="space-y-4 text-md text-slate-600 grid md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Management Consultants
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Business Consultancy
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Project Management
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Financial Consultants
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Tax advisory Consultants
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Debt Collection services
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Cleaning Services
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        General Supply branding
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <CheckSquare
                                        className="text-black shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span className="mt-0">
                                        Other related services
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </p>
                </p>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col h-full bg-slate-50 rounded-2xl">
                        <Reveal classes="flex-grow">
                            <div className="p-4 ">
                                <div className="flex items-center gap-2">
                                    <div className="text-blue-600">
                                        <ClipboardList size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900">
                                        Accounting, Bookkeeping & Auditing
                                        Activities, Tax Consultancy
                                    </h4>
                                </div>
                                <ul className="space-y-4 text-md text-slate-600">
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Recording of commercial
                                                transactions from business.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Examination of accounts and
                                                certification of their accuracy.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Preparation of personal and
                                                business income tax returns.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Advisory activities and
                                                representation on behalf clients
                                                before tax authorities
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Management consultancy on
                                                accounting systems.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Budgetary control procedures.
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                    <div className="flex flex-col h-full bg-slate-50 rounded-2xl">
                        <Reveal classes="flex-grow">
                            <div className="p-4">
                                <div className="flex items-center gap-2">
                                    <div className="text-blue-600">
                                        <Target size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900">
                                        Business Consultancy
                                    </h4>
                                </div>
                                <ul className="space-y-4 text-md text-slate-600">
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Strategic planning
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Market Analysis and Research
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Financial & Feasibility Analysis
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Operational Efficiency
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Tax planning & structuring
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Identify Problem &Solution
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Risk Management & Advisory
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                    <div className="flex flex-col h-full bg-slate-50 rounded-2xl">
                        <Reveal classes="flex-grow">
                            <div className="p-4">
                                <div className="flex items-center gap-2">
                                    <div className="text-blue-600">
                                        <Building2 size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900">
                                        Activities of Head Offices
                                    </h4>
                                </div>
                                <ul className="space-y-4 text-md text-slate-600">
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                The overseeing and managing of
                                                other units of the company or
                                                enterprise
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Undertaking the strategic or
                                                organizational planning and
                                                decision making role of the
                                                company or enterprise.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Exercising operational control
                                                and managing the day to day
                                                operations of their related
                                                units.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Head offices-centralized
                                                administrative offices.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Corporate offices.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                District and regional offices
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Subsidiary management offices.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Financial planning, Billing and
                                                record keeping, personnel and
                                                mail services, other on a
                                                contract of fee basis.
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                    <div className="flex flex-col h-full bg-slate-50 rounded-2xl">
                        <Reveal classes="flex-grow">
                            <div className="p-4">
                                <div className="flex items-center gap-2">
                                    <div className="text-blue-600">
                                        <BarChart3 size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900">
                                        Management Consultancy Activities
                                    </h4>
                                </div>
                                <ul className="space-y-4 text-md text-slate-600">
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                The provision of advice
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Guidance and operational
                                                assistance to business and other
                                                organizations on management
                                                issues
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Corporate strategic and
                                                organizational planning
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Business process reengineering
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Change management
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Cost reduction and other
                                                financial issues
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Marketing objectives and
                                                policies
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Human resource policies
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Practices and planning
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Compensation and retirement
                                                strategies
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Production scheduling and
                                                control planning
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex gap-2 items-start">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Budgetary control procedures
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                    <div className="flex flex-col h-full bg-slate-50 rounded-2xl">
                        <Reveal classes="flex-grow">
                            <div className="p-4">
                                <div className="flex items-center gap-2">
                                    <div className="text-blue-600">
                                        <CalendarCheck size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900">
                                        Project Management
                                    </h4>
                                </div>
                                <ul className="space-y-4 text-md text-slate-600">
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Defining the project goal,
                                                feasibility, and key
                                                stakeholders
                                            </span>
                                        </p>
                                    </li>
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Establishing a roadmap,
                                                including scope, schedules
                                                (Gantt charts), risk, and
                                                resources.
                                            </span>
                                        </p>
                                    </li>
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Developing the deliverables and
                                                performing the work
                                            </span>
                                        </p>
                                    </li>
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Tracking performance against
                                                KPIs to ensure quality and
                                                budget adherence
                                            </span>
                                        </p>
                                    </li>
                                    <li className="mt-4">
                                        <p className="flex gap-2 items-start pt-4">
                                            <SendHorizonal
                                                className="text-black shrink-0 mt-1"
                                                size={16}
                                            />
                                            <span className="mt-0">
                                                Finalizing activities,
                                                delivering the final product,
                                                and conducting retrospective
                                                reviews
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                    <div className="flex flex-col h-full gap-2">
                        <div className="flex flex-col h-full bg-slate-50 rounded-2xl">
                            <Reveal classes="flex-grow">
                                <div className="p-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="text-blue-600">
                                            <BrushCleaning size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">
                                            General Cleaning of Building
                                        </h4>
                                    </div>
                                    <ul className="space-y-4 text-md text-slate-600">
                                        <li className="mt-4">
                                            <p className="flex gap-2 items-start pt-4">
                                                <SendHorizonal
                                                    className="text-black shrink-0 mt-1"
                                                    size={16}
                                                />
                                                <span className="mt-0">
                                                    General cleaning of all
                                                    types of building
                                                </span>
                                            </p>
                                        </li>
                                        <ul className="flex flex-col gap-1">
                                            <li className="ms-5">
                                                <p className="flex gap-2 items-center">
                                                    <DotSquare
                                                        className="text-black shrink-0"
                                                        size={12}
                                                    />
                                                    <span className="mt-0">
                                                        Office
                                                    </span>
                                                </p>
                                            </li>
                                            <li className="ms-5">
                                                <p className="flex gap-2 items-center">
                                                    <DotSquare
                                                        className="text-black shrink-0"
                                                        size={12}
                                                    />
                                                    <span className="mt-0">
                                                        House
                                                    </span>
                                                </p>
                                            </li>
                                            <li className="ms-5">
                                                <p className="flex gap-2 items-center">
                                                    <DotSquare
                                                        className="text-black shrink-0"
                                                        size={12}
                                                    />
                                                    <span>Apartment</span>
                                                </p>
                                            </li>
                                            <li className="ms-5">
                                                <p className="flex gap-2 items-center">
                                                    <DotSquare
                                                        className="text-black shrink-0"
                                                        size={12}
                                                    />
                                                    <span>Factories</span>
                                                </p>
                                            </li>
                                            <li className="ms-5">
                                                <p className="flex gap-2 items-center">
                                                    <DotSquare
                                                        className="text-black shrink-0"
                                                        size={12}
                                                    />
                                                    <span>Shops</span>
                                                </p>
                                            </li>
                                            <li className="ms-5">
                                                <p className="flex gap-2 items-center">
                                                    <DotSquare
                                                        className="text-black shrink-0"
                                                        size={12}
                                                    />
                                                    <span>Institutions</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                        <div className="flex flex-col h-full bg-slate-50 rounded-2xl">
                            <Reveal classes="flex-grow">
                                <div className="p-4">
                                    <div className="flex gap-2">
                                        <div className="text-blue-600">
                                            <Truck size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">
                                            General Supply
                                        </h4>
                                    </div>
                                    <ul className="space-y-2 text-md text-slate-600">
                                        <li className="mt-2">
                                            <p className="flex gap-2 items-start pt-4">
                                                <SendHorizonal
                                                    className="text-black shrink-0 mt-1"
                                                    size={16}
                                                />
                                                <span className="mt-0">
                                                    Office Stationaries
                                                </span>
                                            </p>
                                        </li>
                                        <li className="mt-2">
                                            <p className="flex gap-2 items-start pt-2">
                                                <SendHorizonal
                                                    className="text-black shrink-0 mt-1"
                                                    size={16}
                                                />
                                                <span className="mt-0">
                                                    Foods and Beverage
                                                </span>
                                            </p>
                                        </li>
                                        <li className="mt-2">
                                            <p className="flex gap-2 items-start pt-2">
                                                <SendHorizonal
                                                    className="text-black shrink-0 mt-1"
                                                    size={16}
                                                />
                                                <span className="mt-0">
                                                    Cleaning materials
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
