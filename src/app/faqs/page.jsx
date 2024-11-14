"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import "./style.css";
import { ChevronDown } from "lucide-react";

const faqsData = [
  {
    question: "Giao thông 365 là gì?",
    answer:
      "Giao Thông 365 là mạng xã hội thông minh dành cho cộng đồng lái xe, giúp người dùng dễ dàng theo dõi thông tin vi phạm giao thông của phương tiện, cập nhật chi tiết các điểm phạt nguội và nhận cảnh báo hữu ích từ cộng đồng. Với Giao Thông 365, người dùng không chỉ được hỗ trợ xử lý vi phạm kịp thời mà còn có thể chia sẻ kinh nghiệm và thông tin giao thông, tạo nên một cộng đồng lái xe an toàn và trách nhiệm.",
  },
  {
    question: "Hội viên của Giao thông 365 có quyền lợi gì?",
    answer: (
      <p>
        Giao thông 365 mang đến rất nhiều quyền lợi hấp dẫn cho người tham gia,
        từ hỗ trợ cập nhật kịp thời và xử lý vi phạm giao thông, cung cấp thông
        tin và dịch vụ tiện ích liên quan đến giao thông, đến các ưu đãi về
        phương tiện, bảo hiểm và chăm sóc sức khỏe. <br />
        <span className="block pl-4">
          + Thông báo phạt nguội tự động: Nhận thông báo ngay lập tức khi có vi
          phạm phạt nguội liên quan đến phương tiện của bạn. Không còn lo lắng
          bỏ lỡ thông tin quan trọng.
        </span>{" "}
        <span className="block pl-4">
          + Cập nhật điểm nóng giao thông: Dễ dàng tìm kiếm và theo dõi các điểm
          có gắn camera phạt nguội hoặc các điểm giao thông thường xảy ra vi
          phạm.
        </span>
        <span className="block pl-4">
          + Kết nối cộng đồng giao thông chia sẻ thông tin, tin tức: Tham gia
          cộng đồng giao thông thông minh, nâng cao ý thức chấp hành luật lệ
          giao thông trong cộng đồng.
        </span>{" "}
        <span className="block pl-4">
          + Tư vấn, hỗ trợ xử lý vi phạm nhanh chóng: Cung cấp thông tin, hướng
          dẫn và hỗ trợ kịp thời, giúp xử lý các vi phạm một cách hiệu quả, minh
          bạch và nhanh chóng.
        </span>
      </p>
    ),
  },
  {
    question: "Làm cách nào để kiểm tra xe có vi phạm phạt nguội hay không?",
    answer:
      "Chỉ cần đăng ký hội viên Giao thông 365, bạn sẽ dễ dàng kiểm tra tình trạng phạt nguội của phương tiện. Giao thông 365 sẽ tự động theo dõi và cập nhật, gửi thông báo kịp thời qua SMS, Zalo… mỗi khi có vi phạm. Để đăng ký hội viên, hãy chọn 'Đăng ký' và làm theo hướng dẫn đơn giản để bắt đầu ngay!",
  },
  {
    question:
      "Có được giảm phạt hoặc miễn phạt nguội trong trường hợp đặc biệt không?",
    answer:
      "Trong một số trường hợp đặc biệt như xe bị mất cắp hoặc người vi phạm có lý do hợp lý (như đang đi cấp cứu), bạn có thể cung cấp bằng chứng và làm đơn gửi cơ quan CSGT để xem xét giảm hoặc miễn phạt. Tuy nhiên, quyết định cuối cùng phụ thuộc vào cơ quan xử lý.",
  },
  {
    question: "Vì sao hệ thống báo 'Không phát hiện lỗi vi phạm?",
    answer: (
      <p>
        Nếu hệ thống báo{" "}
        <i>
          'Không phát hiện lỗi vi phạm. Mong bạn tiếp tục tuân thủ luật giao
          thông và lái xe an toàn'
        </i>{" "}
        thì xe của bạn không có lỗi vi phạm hoặc có vi phạm nhưng chưa được đồng
        bộ thông tin với hệ thống tra cứu phạt nguội của CSGT. Thường thì sau
        khi vi phạm 7-30 ngày, lỗi vi phạm mới đồng bộ lên hệ thống để tra cứu.
        Hãy tra cứu lại vào các ngày khác để chủ động trong việc xử lý đóng phạt
        nguội nhé!
      </p>
    ),
  },
  {
    question:
      "Làm thế nào để sử dụng được toàn bộ các tính năng của Giao thông 365?",
    answer:
      "Sử dụng toàn bộ các tính năng của Giao thông 365 là quyền năng độc quyền dành riêng cho người dùng có thẻ hội viên Giao thông 365 liên kết với Công ty TNHH PMC Bảo hiểm. Để sở hữu thẻ hội viên liên kết, bạn hãy liên hệ tổng đài 1900 63 63 66 nhé!",
  },
  {
    question:
      "Chủ xe không phải người điều khiển có chịu trách nhiệm nộp phạt nguội không?",
    answer:
      "Có. Theo quy định, chủ phương tiện phải chịu trách nhiệm đối với vi phạm của phương tiện. Tuy nhiên, chủ xe có thể trình bày và cung cấp bằng chứng nếu có người khác điều khiển tại thời điểm vi phạm, giúp cơ quan chức năng xử lý đúng đối tượng.",
  },
  {
    question: "Không nộp phạt nguội có ảnh hưởng gì không?",
    answer:
      "Nếu không nộp phạt đúng thời hạn, người vi phạm có thể bị phạt bổ sung với mức tiền cao hơn và gặp khó khăn khi đăng kiểm xe, vì xe sẽ không được đăng kiểm nếu còn nợ phạt, điều này ảnh hưởng đến việc lưu hành phương tiện.",
  },
];

function FAQS() {
  return (
    <div className="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
      <div className="py-10">
        <h1 className="text-center text-2xl font-semibold text-[#0d47a1] mb-6">
          Câu hỏi & Giải đáp
        </h1>
        <Accordion.Root
          className="AccordionRoot shadow-lg"
          type="single"
          collapsible
        >
          {faqsData.map((item, index) => (
            <Accordion.Item
              key={index}
              className="AccordionItem"
              value={`item-${index}`}
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className="AccordionTrigger"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDown className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className="AccordionContent"
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default FAQS;
