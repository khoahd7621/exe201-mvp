package com.hanyu.hanyube.config;

import org.springframework.stereotype.Service;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

@Service
public class TelegramBot extends TelegramLongPollingBot {
    @Override
    public String getBotUsername() {
        return "@hanyu_be_bot";
    }

    @Override
    public String getBotToken() {
        return "6110930804:AAGo8Vvy5Ihaey60wEAShjigg6gy2Pcp5Fc";
    }

    @Override
    public void onUpdateReceived(Update update) {

    }

    public void sendMessageToChat(String chatId, String message) {
        SendMessage sendMessage = new SendMessage();
        sendMessage.setChatId(chatId);
        sendMessage.setText(message);

        try {
            execute(sendMessage);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }
}
